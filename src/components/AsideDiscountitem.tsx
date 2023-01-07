import React, { useState, useEffect } from "react";
import { IDiscount } from '@/interfaces';

export default function DiscountItem({ name, discount }: IDiscount) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
    const removeClass = setTimeout(() => {
      setAnimated(false);
    },600)
    return () =>clearTimeout(removeClass)
  },[discount]);
  return(
    <li className={animated ? 'shockwave':''}><span>{name}</span>{discount}</li>
  )
}
