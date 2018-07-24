import { FabrixController as Controller } from '@fabrix/fabrix/dist/common'


/**
 * @module SwaggerController
 * @description Generated Fabrix.js Controller.
 */
export class SwaggerController extends Controller {

  doc(req, res) {
    const swaggerDoc = this.app.services.SwaggerService.getSwaggerDoc()

    return res.json(swaggerDoc)
  }

}

