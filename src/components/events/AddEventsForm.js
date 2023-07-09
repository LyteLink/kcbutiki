"use client";
import React from "react";
import { useFormik } from "formik";
import { eventValidationSchema } from "@/utils/ValidationSchemas";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddEventForm = () => {
  const router = useRouter();

  const initialValues = {
    name: "",
    date: "",
    time: "",
    venue: "",
    isCompleted: false,
  };

  const handleSubmit = async (values) => {
    try {
      await axios.post("/api/events", values);
      formik.resetForm();
      toast.success("Event added successfully");
      router.push("/dashboard/events");
    } catch (error) {
      console.error("Error adding event:", error);
      toast.error("Error adding event:");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: eventValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="p-4 rounded-lg shadow bg-white">
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
            placeholder="e.g Senior Four Prom"
            className={`${
              formik.touched.name && formik.errors.name && "error"
            }`}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Date */}
        <div className="mt-4">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            className={`${
              formik.touched.date && formik.errors.date && "error"
            }`}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="error">{formik.errors.date}</div>
          ) : null}
        </div>

        {/* Time */}
        <div className="mt-4">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
            className={`${
              formik.touched.time && formik.errors.time && "error"
            }`}
          />
          {formik.touched.time && formik.errors.time ? (
            <div className="error">{formik.errors.time}</div>
          ) : null}
        </div>

        {/* Venue */}
        <div className="mt-4">
          <label htmlFor="venue">Venue:</label>
          <input
            type="text"
            id="venue"
            name="venue"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.venue}
            placeholder="e.g Main Building"
            className={`${
              formik.touched.venue && formik.errors.venue && "error"
            }`}
          />
          {formik.touched.venue && formik.errors.venue ? (
            <div className="error">{formik.errors.venue}</div>
          ) : null}
        </div>

        {/* Completed Status */}
        <div className="flex-align-center gap-x-2 mt-4">
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted"
            onChange={formik.handleChange}
            checked={formik.values.isCompleted}
          />
          <label htmlFor="isCompleted">Completed:</label>
        </div>

        <button type="submit" className="btn" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;
