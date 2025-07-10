import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

// EmailJS config
const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";

const Contact = () => {
  const inputStyle = `w-full bg-transparent p-3 outline-none  placeholder:text-white/40`;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9+\-() ]+$/, "Invalid phone number"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const templateParams = {
        first_name: values.firstName,
        last_name: values.lastName,
        phone: values.phone,
        email: values.email,
      };

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(() => {
          alert("Message sent successfully!");
          resetForm();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again later.");
        });
    },
  });

  return (
    <div className="bg-[linear-gradient(180deg,_#97EBF4_0%,_#58898E_97%)] py-14  max-lg:px-10 max-md:px-4 max-md:py-12">
      <p className="text-3xl font-bold max-w-7xl w-full mx-auto">Contact us</p>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-5xl w-full mx-auto mt-9 text-white"
      >
        <p className="text-2xl font-semibold">Feel free to reach out today</p>

        <article className="flex items-start gap-x-8 mt-6">
          <label className="w-full">
            <span className="font-semibold">First name*  {formik.touched.firstName && formik.errors.firstName && (
              <span className="text-red-700 text-sm">({formik.errors.firstName})</span>
            )}</span>
            <input
              placeholder="Enter your First name"
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className={`${inputStyle} ${formik.touched.firstName && formik.errors.firstName  ? "border-red-600": "border-secondaryCol"} border-b`}
            />
           
          </label>

          <label className="w-full">
            <span className="font-semibold">Last name*  {formik.touched.lastName && formik.errors.lastName && (
              <span className="text-red-500 text-sm">({formik.errors.lastName})</span>
            )}</span>
            <input
              placeholder="Enter your Last name"
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className={`${inputStyle} ${formik.touched.lastName && formik.errors.lastName   ? "border-red-600": "border-secondaryCol"} border-b`}
            />
           
          </label>
        </article>

        <article className="flex items-start gap-x-5 mt-5">
          <label className="w-full">
            <span className="font-semibold">Phone number* {formik.touched.phone && formik.errors.phone && (
              <span className="text-red-500 text-sm">({formik.errors.phone})</span>
            )}</span>
            <input
              placeholder="Enter your phone number"
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={`${inputStyle} ${formik.touched.phone && formik.errors.phone  ? "border-red-600": "border-secondaryCol"} border-b`}
            />
            
          </label>

          <label className="w-full">
            <span className="font-semibold">Email* {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">({formik.errors.email})</span>
            )}</span>
            <input
              type="email"
              placeholder="Enter your Email address"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`${inputStyle} ${formik.touched.email && formik.errors.email ? "border-red-600": "border-secondaryCol"} border-b`}
            />
            
          </label>
        </article>

        <article className="w-fit ml-auto">
          <button
            type="submit"
            className="bg-black text-white text-sm font-bold px-6 py-2.5 rounded-md mt-6"
          >
            Get in touch with us
          </button>
        </article>
      </form>
    </div>
  );
};

export default Contact;
