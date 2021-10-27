import axios from "axios";

const getProjects = () => axios.get(`${process.env.REACT_APP_BACK_URL}/projects`);

const getProject = (id) => axios.get(`${process.env.REACT_APP_BACK_URL}/projects/${id}`);

export {getProjects, getProject}