import React from "react";
import { NotFound as NotFoundComponent } from "@/components";


export const metadata = {
 title: 'Not Found',
 description: 'Page not found',
} 

export default function NotFound() {
  return (
    <NotFoundComponent/>
  );
};
