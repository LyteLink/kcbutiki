"use client";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const NextProgressProvider = () => {
  NProgress.start();
  NProgress.done();
  return <></>;
};

export default NextProgressProvider;
