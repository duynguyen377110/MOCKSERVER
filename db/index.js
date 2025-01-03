const assigned = require('./assigned.json');
const availability = require('./availability.json');
const calls_history = require('./calls_history.json');
const calls_status = require('./calls_status.json');
const city = require('./city.json');
const commands = require('./commands.json');
const common_positions = require('./common_positions.json');
const common_sectors = require('./common_sectors.json');
const common_status = require('./common_status.json');
const conf_am = require('./conf_am.json');
const ipm = require('./conf_ipm.json');
const ipm_history = require('./conf_ipm_history.json');
const conf_sm = require('./conf_sm.json');
const crm = require('./crm.json');
const currency = require('./currency.json');
const customers = require('./customers.json');
const device = require('./device.json');
const device_location = require('./device_location.json');
const district = require('./district.json');
const hardware = require('./hardware.json');
const kfm_kim = require('./kfm_kim.json');
const kfm_kim_products = require('./kfm_kim_products.json');
const k_status_log = require('./kfm_kms.json');
const kfm_sim = require('./kfm_sim.json');
const kiosk_status = require('./kiosk_status.json');
const kms_logtype = require('./kms_logtype.json');
const kms_severity = require('./kms_severity.json');
const la = require('./la.json');
const lg = require('./lg.json');
const log_admin = require('./log_admin.json');
const log_features = require('./log_features.json');
const log_status = require('./log_status.json');
const models = require('./model.json');
const qlkh01 = require('./mp_mp_qlc01.json');
const qlc01 = require('./mp_sp_qlkh01.json');
const qlt01 = require('./mp_ts_qlt01.json');
const ms = require('./ms.json');
const ms_history = require('./ms_history.json');
const ms_status = require('./ms_status.json');
const payment_status = require('./payment_status.json');
const permissions = require('./permissions.json');
const productsub = require('./productsub.json');
const provinces = require('./provinces.json');
const reviews = require('./reviews.json');
const rm_cl = require('./rm_cl.json');
const role = require('./role.json');
const software = require('./software.json');
const status = require('./status.json');
const ticket = require('./ticket.json');
const ticket_issues = require('./ticket_issues.json');
const ticket_priority = require('./ticket_priority.json');
const ticket_status = require('./ticket_status.json');
const txn_all = require('./txn_all.json');
const txn_prepaid_sim = require('./txn_prepaid_sim.json');
const txn_topup_postpaid = require('./txn_topup_postpaid.json');
const txn_topup_prepaid = require('./txn_topup_prepaid.json');
const txn_type = require('./txn_type.json');
const type = require('./type.json');
const users = require('./user.json');
const ward = require('./ward.json');

module.exports = function () {
  return {
    users: users,
    kim: kfm_kim,
    kfm_kim_products: kfm_kim_products,
    sim: kfm_sim,
    txn_type: txn_type,
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
    ms_history: ms_history,
    device_location: device_location,
    txn_topup_postpaid: txn_topup_postpaid,
    txn_topup_prepaid: txn_topup_prepaid,
    txn_prepaid_sim: txn_prepaid_sim,
    txn_all: txn_all,
    payment_status: payment_status,
    kiosk_status: kiosk_status,
    crm: crm,
    log_admin: log_admin,
    lg: lg,
    la: la,
    role: role,
    permissions: permissions,
    log_features: log_features,
    log_status: log_status,
    calls_history: calls_history,
    calls_status: calls_status,
    ticket: ticket,
    ticket_issues: ticket_issues,
    ticket_status: ticket_status,
    ticket_priority: ticket_priority,
  };
};
