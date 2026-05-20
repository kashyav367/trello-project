import ApiResponse from "../../common/utils/api-response.js";
import * as orgService from "./org.service.js";


const createOrganisation = async (req, res, next) => {
  try {
    const org = await orgService.createOrganisation({
      ...req.body,        // orgName, description
      userId: req.userId  // middleware se aaya
    });

    ApiResponse.ok(
      res,
      "Org created successfully",
      org
    );

  } catch (err) {
    next(err);
  }
};


const addMember = async (req, res, next) => {
  try {
    const data = await orgService.addMember(req)

    ApiResponse.ok(
      res,
      "member get added",
      data
    );

  } catch (err) {
    next(err);
  }
};

const deleteMember = async (req, res, next) => {
  try {
    const data = await orgService.deleteMember(req)

    ApiResponse.ok(
      res,
      "member get deleted",
      data
    );

  } catch (err) {
    next(err);
  }
};






export { createOrganisation , addMember , deleteMember  };