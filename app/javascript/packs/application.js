// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "../controllers";
import "../stylesheets/application.scss";
import ReactRailsUJS from "react_ujs";
import App from "../src/App";

import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "../src/common/logger";

initializeLogger();
setAuthHeaders();

const componentsContext = { App };
ReactRailsUJS.getConstructor = (name) => {
  return componentsContext[name];
};
