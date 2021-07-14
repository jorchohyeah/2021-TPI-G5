const { ministerioUrl } = require("../config/dependencies.config");
const ministerioCli = require("dacs-integrador-g5");
const { ReporteMensual } = require("../models/mongoose");

class EmpresaRepository {

  /**
   * Registrar la empresa dentro del sistema del Ministerio
   * @param {} data 
   * @returns 
   */
  async registerEmpresa(infoEmpresa) {
    const urlSignup = ministerioUrl + "/api/signup"
    try {
      const response = await ministerioCli.registroMinisterio(urlSignup, infoEmpresa);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Obtener todos los reportes de la empresa
   * @returns 
   */
  async getReportes(email, secret) {
    const urlLogin = ministerioUrl + "/api/login";
    const urlReports = ministerioUrl + "/api/reports"
    let respuesta;
    try {
      const token = await ministerioCli.iniciarSesionMinisterio(
        urlLogin,
        email,
        secret,
      );
      if (token) {
        return respuesta = await ministerioCli.getReportesMinisterio(
          urlReports,
          token
        )
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Enviar reporte al ministerio
   * @param {*} reporteMensual 
   * @returns 
   */
  async sendReportes(email, secret, reporte) {
    const urlLogin = ministerioUrl + "/api/login";
    const urlReports = ministerioUrl + "/api/reports";
    let respuesta = [];
    
    try {
      const token = await ministerioCli.iniciarSesionMinisterio(
        urlLogin,
        email,
        secret
      );
      console.log(token);
      if (token) {
        respuesta = await ministerioCli.sendReportesAlMinisterio(
          urlReports,
          reporte,
          token
        )
      }
      return respuesta;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async saveReporte(reporte) {
    const reporteMensual = new ReporteMensual(reporte);
    await reporteMensual.save();
    return reporte;
  }

}

module.exports = EmpresaRepository;