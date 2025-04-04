import { Request, Response } from 'express';
import { sendResponse, signToken } from '../utils';
import { sendEmail } from '../utils/email';
import { checkLoginCredentials } from '../middleware/loginMiddleware';
import Checkrole from '../utils/checkRole';
// import Database from '../database';
// import { handlePasswordExpiration } from '../middleware/passwordExpiration';
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await checkLoginCredentials(email, password);
    if (!user) {
      return sendResponse<null>(
        res,
        400,
        null,
        'User not found or Invalid Credentials'
      );
    }
    // if (passwordExpired(user.lastTimePasswordUpdated)) {
    //   return Database.User.findOne({ where: { id: user.id } }).then(() =>
    //     handlePasswordExpiration(user, res)
    //   );
    // }

    if (user.status !== true) {
      return sendResponse<null>(res, 403, null, 'This account is SUSPENDED!!');
    }
    if (!user.verified) {
      const verificationToken = signToken({ email: user.email }, '15m');
      const { name } = user;
      const mailOptions = {
        to: email,
        subject: 'Verify Your Email',
        template: 'verifyAccount',
        context: {
          name,
          verificationLink: `${process.env.ROOT_URL}/api/users/verify-email/${verificationToken}`,
        },
      };
      await sendEmail(mailOptions);
      return sendResponse<null>(
        res,
        401,
        null,
        'Please check your email to verify your account before login.'
      );
    }
    await Checkrole(user.id, email, req, res);
  } catch (error) {
    const errorMessage = (error as Error).message;
    return sendResponse<null>(res, 500, null, errorMessage);
  }
};

export default loginController;
