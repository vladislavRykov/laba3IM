//@ts-nocheck
import React from 'react';
import s from './CourseItem.module.scss';
import { Link } from 'react-router-dom';

const CourseItem = (props: { id: number; title: string; desc: string; bg: string }) => {
  return (
    <Link to={{ pathname: `/courses/${props.id}`, state: { fwfwe: 123 } }} className={s.wrapper}>
      <div style={{ backgroundColor: props.bg }} className={s.courseImg}></div>
      <h2 style={{ fontWeight: '600' }}>{props.title}</h2>
      <p>{props.desc}</p>
    </Link>
  );
};

export default CourseItem;
