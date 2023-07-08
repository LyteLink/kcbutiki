"use client";
import React from "react";
import { useFormik } from "formik";
import { subjectValidationSchema } from "@/utils/ValidationSchemas";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddSubjectForm = () => {
  const router = useRouter();
  const initialValues = {
    name: "",
    description: "",
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("/api/subjects/create", values);
      console.log("Response from server:", response.data);
      formik.resetForm();
      toast.success("Subject added successfully");
      router.push("/dashboard/subjects");
    } catch (error) {
      console.error("Error adding subject:", error);
      toast.error("Error adding subject:");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: subjectValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="p-4 bg-white rounded-e-lg border">
      <form onSubmit={formik.handleSubmit}>
        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="e.g Computer Science"
            className={`${
              formik.touched.name && formik.errors.name && "error"
            }`}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Description */}
        <div className="mt-4">
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            placeholder="Club Description"
            className={`${
              formik.touched.description && formik.errors.description && "error"
            }`}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>

        <button type="submit" className="btn" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddSubjectForm;
