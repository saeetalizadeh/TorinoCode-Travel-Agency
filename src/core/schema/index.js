import { object, string } from "yup";

export const personalInfo = object({
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
