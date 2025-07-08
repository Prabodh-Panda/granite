// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import "../stylesheets/application.scss";

import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "../src/common/logger";

initializeLogger();
setAuthHeaders();
