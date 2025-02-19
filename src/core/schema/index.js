import { object, string } from "yup";

const personalInfo = object({
  fullName: string()
    .required("تکمیل این بخش ضروری است!")
    .matches(
      /^[a-zA-Z\u0600-\u06FF\s]*$/,
      "نام و نام خانوادگی فقط باید شامل حروف باشد",
    )
    .min(7, "تعداد کارکتر باید بیش از 7 مورد باشد!"),
  nationalCode: string()
    .required("تکمیل این بخش ضروری است!")
    .length(10, "کدملی باید شامل 10 رقم باشد!"),
  birthDate: string().required("تکمیل این بخش ضروری است!"),
  gender: string()
    .required("جنسیت خود را مشخص کنید!")
    .matches(/^[a-zA-Z]*$/, "جنسیت خود را مشخص کنید!"),
});

const bankAcountSchema = object({
  shaba_code: string()
    .required("شماره شبا را وارد کنید!")
    .length(24, "شماره شبا باید 24 رقم باشد!"),
  debitCard_code: string()
    .required("شماره کارت را وارد کنید!")
    .length(16, "شماره کارت باید ۱۶ رقم باشد!"),
  accountIdentifier: string()
    .required("شماره حساب را وارد کنید!")
    .min(12, "شماره حساب باید حداقل 12 رقم باشد!")
    .max(16, "شماره حساب باید حداکثر 16 رقم باشد!"),
});

const email = object({
  email: string()
    .required("این قسمت نباید خالی بماند!")
    .matches(
      /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      "لطفا یک ایمیل معتبر وارد کنید!",
    ),
});

export { bankAcountSchema, personalInfo, email };
