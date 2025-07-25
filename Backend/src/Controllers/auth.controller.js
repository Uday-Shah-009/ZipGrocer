import { cookieConfigs } from "../configs/cookieConfigs.js";
import { getAllUsers, getDeliverypartners } from "../DOA/auth.doa.js";
import {
  loginUserService,
  registerUserService,
  userProfileService,
} from "../services/auth.service.js";
import { sendMail } from "../utils/nodeMailer.js";
import { tryCatchWrapper } from "../utils/tryCatchWrapper.js";

export const registerUser = tryCatchWrapper(async (req, res) => {
  const user = req.body;
  const { createdUser } = await registerUserService(user);

  if (createdUser.role === "user") {
    console.log("sent to user");
    await sendMail({
      to: createdUser.email,
      subject: "welcome to Zip Grocer",
      templateName: "WelcomeUser",
      data: {
        name: createdUser.name,
      },
    });
  }

  if (createdUser.role === "delivery") {
    await sendMail({
      to: createdUser.email,
      subject: "welcome to Zip Grocer",
      templateName: "WelcomePartner",
      data: {
        name: createdUser.name,
      },
    });
  }

  if (createdUser) {
    res.cookie("token", createdUser.token, cookieConfigs);
    res
      .status(201)
      .json({ status: "success", message: "user created", user: createdUser });
  } else {
    res.status(400).json({ status: "failed!", message: "try again" });
  }
});

export const loginUser = tryCatchWrapper(async (req, res) => {
  const user = req.body;
  const loggedIn = await loginUserService(user);
  if (loggedIn) {
    res.cookie("token", loggedIn.token, cookieConfigs);
    res
      .status(200)
      .json({
        user: loggedIn.existinguser,
        token: loggedIn.token,
        message: "login Success",
      });
  } else {
    res.status(400).json({ status: "failed!", message: "try again" });
  }
});

export const userProfile = tryCatchWrapper(async (req, res) => {
  const { id } = req.user;
  const user = await userProfileService(id);
  if (user) {
    res.status(200).json({ user: user, message: "profile found" });
  } else {
    res.status(400).json({ status: "failed!", message: "try again" });
  }
});

export const allusers = tryCatchWrapper(async (req, res) => {
  const users = await getAllUsers();
  if (users) {
    res.status(200).json({ count: users.length });
  }
});

export const DeliveryPartners = tryCatchWrapper(async(req,res) => {
  const delivery = await getDeliverypartners();
    res.status(200).json({count: delivery.length})
})