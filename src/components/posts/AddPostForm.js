/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import { storage } from "@/firebase.config";
import { toolbarOptions } from "@/utils/react-quill-toolbar";
import { FiTrash } from "react-icons/fi";
import slugify from "slugify";
import { deleteObject, ref } from "firebase/storage";
import { postValidationSchema } from "@/utils/ValidationSchemas";
import { handleImageUpload } from "@/utils/handleImageUpload";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const AddPostForm = () => {
  const router = useRouter();
  const imageInput = useRef(null);
  const [hideProgressWrapper, sethideProgressWrapper] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const progressRef = useRef();
  const imageRef = useRef();

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      await axios.post("/api/posts", values);
      formik.resetForm();
      toast.success("Post added successfully");
      router.push("/dashboard/posts");
    } catch (error) {
      console.error("Error adding post:", error);
      toast.error("Error adding post:");
    }
  };

  // Function to generate a slug from the title using slugify
  const handleSlugify = (event) => {
    const slug = slugify(event.target.value, { lower: true });
    formik.setFieldValue("slug", slug);
  };

  // Upload Image-----------------------------------------------------------------------------------------------------------
  const uploadImage = (e) => {
    handleImageUpload(
      e,
      setUploading,
      setPercentage,
      sethideProgressWrapper,
      formik,
      progressRef,
      "posts"
    );
  };

  // Delete Image-----------------------------------------------------------------------------------------------------------
  const deleteImage = (image) => {
    const imageRef = ref(storage, image);
    formik.setFieldValue("imageUrl", "");
    deleteObject(imageRef)
      .then(() => {
        console.log("Image deleted successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // useFormik hook to handle form state and validation
  const formik = useFormik({
    initialValues: {
      title: "",
      slug: "",
      description: "",
      imageUrl: "",
      content: "",
      published: false,
    },
    validationSchema: postValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleEditorChange = (value) => {
    formik.setFieldValue("content", value);
  };

  const handleEditorBlur = () => {
    formik.setFieldTouched("content", true);
  };

  return (
    <div className="p-4 bg-white shadow border rounded-lg">
      <form onSubmit={formik.handleSubmit}>
        {/* Title */}
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => {
              formik.handleChange(e);
              handleSlugify(e);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            placeholder="Enter post title..."
            className={`${
              formik.touched.title && formik.errors.title && "error"
            }`}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}
        </div>

        {/* Slug */}
        <div className="mt-4">
          <label htmlFor="slug">Slug:</label>
          <input
            type="text"
            id="slug"
            name="slug"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.slug}
            placeholder="Enter post slug..."
            className={`${
              formik.touched.slug && formik.errors.slug && "error"
            }`}
          />
          {formik.touched.slug && formik.errors.slug ? (
            <div className="error">{formik.errors.slug}</div>
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
            placeholder="Enter post description..."
            className={`${
              formik.touched.description && formik.errors.description && "error"
            }`}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>

        {/* Content */}
        <div className="mt-4">
          <label htmlFor="content">Content:</label>
          <ReactQuill
            theme="snow"
            id="content"
            name="content"
            value={formik.values.content}
            onChange={handleEditorChange}
            onBlur={handleEditorBlur}
            modules={{ toolbar: toolbarOptions }}
            className={`shadow-sm ${
              formik.touched.content && formik.errors.content && "error"
            }`}
          />
          {formik.touched.content && formik.errors.content ? (
            <div className="error">{formik.errors.content}</div>
          ) : null}
        </div>

        {/* Image */}
        <div className="relative mt-4">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            hidden
            ref={imageInput}
            onChange={uploadImage}
            onBlur={formik.handleBlur}
          />
          <img
            src={`${
              formik.values.imageUrl
                ? formik.values.imageUrl
                : "/images/coverphoto.png"
            }`}
            alt=""
            className={`w-full h-[200px] my-2 cursor-pointer object-cover rounded-md ${
              uploading && "opacity-40 pointer-events-none"
            }`}
            onClick={() => imageInput.current.click()}
            ref={imageRef}
          />
          <div
            className={`absolute top-2 right-2 bg-red-500 hover:opacity-80 text-white h-10 w-10 rounded-full sm:cursor-pointer hidden place-items-center ${
              formik.values.imageUrl && "!grid"
            }`}
            onClick={() => deleteImage(formik.values.imageUrl)}
          >
            <FiTrash />
          </div>

          <div className="mt-2">
            {formik.touched.imageUrl && formik.errors.imageUrl ? (
              <div className="error">{formik.errors.imageUrl}</div>
            ) : null}
          </div>
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden ${
              uploading && "!block"
            }`}
          >
            <div className="loader"></div>
          </div>
        </div>
        <div
          className={`flex-center-between gap-2 ${
            hideProgressWrapper && "!hidden"
          }`}
        >
          <div className="progressbar w-full h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full" ref={progressRef}></div>
          </div>
          <p className="ml-2 flex-shrink-0">{percentage}%</p>
        </div>

        {/* Published */}
        <div className="flex-align-center gap-2 mt-4">
          <input
            type="checkbox"
            id="published"
            name="published"
            onChange={formik.handleChange}
            checked={formik.values.published}
          />
          <label htmlFor="published">Is Published:</label>
        </div>

        <button type="submit" className="btn" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
