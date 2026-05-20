import ApiError from "../../common/utils/api-error.js";
import userModel from "../auth/auth.model.js";
import orgModel from "./org.model.js";

const createOrganisation = async (data) => {

  const orgExists = await orgModel.findOne({
    orgName: data.orgName
  });

  if (orgExists) {
    throw ApiError.forBidden("organisation already exists");
  }

  const newOrg = await orgModel.create({
    orgName: data.orgName,
    description: data.description,
    admin: data.userId,
    member: []
  });

  return newOrg;
};

const addMember = async(req) => {

    const newMember = req.body.member

    //user checks 
    const newMemberUser = await userModel.findOne({
      username : newMember
    })

    if(!newMemberUser){
      throw ApiError.notFound("user not found")
    }

    console.log('req.userId', req.userId)

    //organisation
    const orgDetails = await orgModel.findOne({
      admin : req.userId
    })

    if(!orgDetails){
      throw ApiError.notFound("organisation not found")
    }

    //prevent member duplicate
    const memberExists = orgDetails.member.includes(newMemberUser._id);
     
    if(memberExists){
      throw ApiError.badRequest("Member already exists in organisation")
    }

    //add member
    orgDetails.member.push(newMemberUser._id);
    await orgDetails.save()
    return orgDetails
} 


const deleteMember = async (req) => {

    const deleteUser = req.body.username;

    //  Check user exists
    const deleteUserData = await userModel.findOne({
        username: deleteUser
    });

    if (!deleteUserData) {
        throw ApiError.notFound("User not exist");
    }

   // Find organisation 
    const orgDetails = await orgModel.findOne({
        admin: req.userId
    });

    if (!orgDetails) {
        throw ApiError.notFound("Organisation not exists");
    }

    // Check if user is actually a member
    const isMember = orgDetails.member.some(
        id => id.toString() === deleteUserData._id.toString()
    );

    if (!isMember) {
        throw ApiError.badRequest("User is not a member of this organisation");
    }

    // Remove member
    orgDetails.member = orgDetails.member.filter(
        id => id.toString() !== deleteUserData._id.toString()
    );

    await orgDetails.save();

    return orgDetails;
};



export { createOrganisation , addMember , deleteMember};