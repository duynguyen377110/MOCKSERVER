const assigned = require('./assigned.json');
const availability = require('./availability.json');
const commands = require('./commands.json');
const currency = require('./currency.json');
const customers = require('./customers.json');
const device = require('./device.json');
const hardware = require('./hardware.json');
const kfm_kim = require('./kfm_kim.json');
const kfm_kim_products = require("./kfm_kim_products.json");
const k_status_log = require('./kfm_kms.json');
const kfm_sim = require('./kfm_sim.json');
const kfm_tvr = require('./kfm_tvr.json');
const kfm_tvr_payMT = require('./kfm_tvr_payMT.json');
const kfm_tvr_txnType = require('./kfm_tvr_txnType.json');
const rm_cl = require('./rm_cl.json');
const kms_logtype = require('./kms_logtype.json');
const kms_severity = require('./kms_severity.json');
const models = require('./model.json');
const qlkh01 = require('./mp_mp_qlc01.json');
const qlc01 = require('./mp_sp_qlkh01.json');
const qlt01 = require('./mp_ts_qlt01.json');
const productsub = require('./productsub.json');
const reviews = require('./reviews.json');
const software = require('./software.json');
const status = require('./status.json');
const type = require('./type.json');
const users = require('./user.json');
const provinces = require("./provinces.json");
const conf_am = require("./conf_am.json");
const common_status = require("./common_status.json");
const common_sectors = require("./common_sectors.json");
const common_positions = require("./common_positions.json");
const city = require('./city.json')
const district = require('./district.json')
const ward = require('./ward.json')
const ms = require('./ms.json')
const ms_status = require('./ms_status.json')
const conf_sm = require("./conf_sm.json");
const ipm = require("./conf_ipm.json");
const ipm_history = require("./conf_ipm_history.json");
const device_location = require("./device_location.json");

module.exports = function () {
  return {
    users: users,
    kim: kfm_kim,
    kfm_kim_products: kfm_kim_products,
    sim: kfm_sim,
    tvr: kfm_tvr,
    payment_method: kfm_tvr_payMT,
    transaction_type: kfm_tvr_txnType,
    qlc01: qlc01,
    qlkh01: qlkh01,
    qlt01: qlt01,
    status: status,
    assigned: assigned,
    models: models,
    device: device,
    type: type,
    currency: currency,
    availability: availability,
    productsub: productsub,
    commands: commands,
    common_status: common_status,
    common_sectors: common_sectors,
    common_positions: common_positions,
    reviews: reviews,
    customers: customers,
    hardware: hardware,
    k_status_log: k_status_log,
    kms_logtype: kms_logtype,
    kms_severity: kms_severity,
    software: software,
    kms: k_status_log,
    provinces: provinces,
    am: conf_am,
    cl: rm_cl,
    city: city,
    district: district,
    ward: ward,
    ms: ms,
    ms_status: ms_status,
    sm: conf_sm,
    ipm: ipm,
    ipm_history: ipm_history,
    device_location: device_location,
  };
};
