import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getOriginalLink } from "../../store/actions";

const RedirectPage = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getOriginalLink(props.match.params.id));

    window.location.href = state.currentLink.originalLink;
  }, [dispatch]);
  return <></>;
};

export default RedirectPage;
