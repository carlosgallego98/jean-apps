import React from "react";

type IProps = {
  title: string;
  description: any;
};

export default function DescriptionListItem({ title, description }: IProps) {
  return (
    <div className="grid grid-cols-5 mb-1">
      <dt className="col-span-1 font-medium text-white ">
        {title}
      </dt>
      <dd className="col-span-full text-gray-300 font-medium  mb-2 lg:mb-0 sm:col-span-2">
        {description}
      </dd>
    </div>
  );
}
