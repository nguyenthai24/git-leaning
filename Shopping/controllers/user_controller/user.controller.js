const UserModel = require('../../models/user.model');
const OtpModel = require('../../models/otp.model');
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');

const regisUser = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await UserModel.findItemByQuery({ email: email });

        if (user) {
            return {
                code: 400,
                status: false,
                message: 'This email is already in user',
            };
        }

        const otp = await otpGenerator.generate(6, {
            digits: true,
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
        });
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(otp, salt);

        const newOtp = await OtpModel.createItemByQuery({email: email, otp: hash})


        return res.send({
            elements: {
                email: email,
                otp: hash
            },
            code: 200,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = { regisUser };

// module.exports = { regisUser }
