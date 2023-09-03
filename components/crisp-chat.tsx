"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("39d3802f-10b9-47ae-a5a7-0d6e894543ca");
  }, []);

  return null;
};
