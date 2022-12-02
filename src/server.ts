import swaggerUi from "swagger-ui-express";

import { app } from ".";
import swagger from "./swagger.json";

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger));

app.listen(3333, () => console.log("Server is running!"));
