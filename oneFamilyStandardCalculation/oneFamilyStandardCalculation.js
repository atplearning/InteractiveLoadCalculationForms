const vData = versionData.find(v => v.year === year);
const el_code_year = document.getElementById("code-year");
const el_main = document.querySelector("main");
const el_1_area = document.getElementById("1-area");
const el_1_area_out = document.getElementById("1-area-out");
const el_1_small_app_va = document.getElementById("1-small-app-va");
const el_1_small_app_circuits = document.getElementById("1-small-app-circuits");
const el_1_small_app_out = document.getElementById("1-small-app-out");
const el_1_laundry_va = document.getElementById("1-laundry-va");
const el_1_laundry_out = document.getElementById("1-laundry-out");
const el_1_subtotal_out = document.getElementById("1-subtotal-out");
const el_1_first_va = document.getElementById("1-first-va");
const el_1_first_out = document.getElementById("1-first-out");
const el_1_next_va = document.getElementById("1-next-va");
const el_1_next_out = document.getElementById("1-next-out");
const el_1_remaining_va = document.getElementById("1-remaining-va");
const el_1_remaining_out = document.getElementById("1-remaining-out");
const el_1_total_out = document.getElementById("1-total-out");
const el_1_phases_out = document.getElementById("1-phases-out");
const el_1_neutral_out = document.getElementById("1-neutral-out");
const el_2_dishwasher_va = document.getElementById("2-dishwasher-va");
const el_2_dishwasher_neutral = document.getElementById("2-dishwasher-neutral");
const el_2_disposer_va = document.getElementById("2-disposer-va");
const el_2_disposer_neutral = document.getElementById("2-disposer-neutral");
const el_2_compactor_va = document.getElementById("2-compactor-va");
const el_2_compactor_neutral = document.getElementById("2-compactor-neutral");
const el_2_water_heater_va = document.getElementById("2-water-heater-va");
const el_2_water_heater_neutral = document.getElementById("2-water-heater-neutral");
const el_2_cust_app_1_name = document.getElementById("2-cust-app-1-name");
const el_2_cust_app_1_va = document.getElementById("2-cust-app-1-va");
const el_2_cust_app_1_neutral = document.getElementById("2-cust-app-1-neutral");
const el_2_cust_app_2_name = document.getElementById("2-cust-app-2-name");
const el_2_cust_app_2_va = document.getElementById("2-cust-app-2-va");
const el_2_cust_app_2_neutral = document.getElementById("2-cust-app-2-neutral");
const el_2_cust_app_3_name = document.getElementById("2-cust-app-3-name");
const el_2_cust_app_3_va = document.getElementById("2-cust-app-3-va");
const el_2_cust_app_3_neutral = document.getElementById("2-cust-app-3-neutral");
const el_2_total_phases_out = document.getElementById("2-total-phases-out");
const el_2_total_phases_75_out = document.getElementById("2-total-phases-75-out");
const el_2_total_neutral_out = document.getElementById("2-total-neutral-out");
const el_2_total_neutral_75_out = document.getElementById("2-total-neutral-75-out");
const el_2_phases_out = document.getElementById("2-phases-out");
const el_2_neutral_out = document.getElementById("2-neutral-out");
const el_3_dryer_va = document.getElementById("3-dryer-va");
const el_3_dryer_percent = document.getElementById("3-dryer-percent");
const el_3_dryer_out = document.getElementById("3-dryer-out");
const el_3_phases_out = document.getElementById("3-phases-out");
const el_3_neutral_out = document.getElementById("3-neutral-out");
const el_4_col_a_va = document.getElementById("4-col-a-va");
const el_4_col_a_num = document.getElementById("4-col-a-num");
const el_4_col_a_out = document.getElementById("4-col-a-out");
const el_4_col_b_va = document.getElementById("4-col-b-va");
const el_4_col_b_num = document.getElementById("4-col-b-num");
const el_4_col_b_out = document.getElementById("4-col-b-out");
const el_4_col_c_va = document.getElementById("4-col-c-va");
const el_4_col_c_num = document.getElementById("4-col-c-num");
const el_4_col_c_out = document.getElementById("4-col-c-out");
const el_4_total_out = document.getElementById("4-total-out");
const el_4_phases_out = document.getElementById("4-phases-out");
const el_4_neutral_out = document.getElementById("4-neutral-out");
const el_5_heating_unit_va = document.getElementById("5-heating-unit-va");
const el_5_heating_unit_out = document.getElementById("5-heating-unit-out");
const el_5_ac_unit_va = document.getElementById("5-ac-unit-va");
const el_5_ac_unit_out = document.getElementById("5-ac-unit-out");
const el_5_heat_pump_va = document.getElementById("5-heat-pump-va");
const el_5_heat_pump_out = document.getElementById("5-heat-pump-out");
const el_5_largest_load_va = document.getElementById("5-largest-load-va");
const el_5_phases_out = document.getElementById("5-phases-out");
const el_5_neutral_out = document.getElementById("5-neutral-out");
const el_6_phases_va = document.getElementById("6-phases-va");
const el_6_phases_va_out = document.getElementById("6-phases-va-out");
const el_6_phases_out = document.getElementById("6-phases-out");
const el_6_neutral_va = document.getElementById("6-neutral-va");
const el_6_neutral_va_out = document.getElementById("6-neutral-va-out");
const el_6_neutral_out = document.getElementById("6-neutral-out");
const el_7_service_voltage = document.getElementById("7-service-voltage");
const el_7_phases_va = document.getElementById("7-phases-va");
const el_7_phases_v = document.getElementById("7-phases-v");
const el_7_phases_a_out = document.getElementById("7-phases-a-out");
const el_7_neutral_va = document.getElementById("7-neutral-va");
const el_7_neutral_v = document.getElementById("7-neutral-v");
const el_7_neutral_a_out = document.getElementById("7-neutral-a-out");
const el_7_first_va = document.getElementById("7-first-va");
const el_7_first_out = document.getElementById("7-first-out");
const el_7_remaining_va = document.getElementById("7-remaining-va");
const el_7_remaining_out = document.getElementById("7-remaining-out");
const el_7_total_out = document.getElementById("7-total-out");
const el_7_phases_out = document.getElementById("7-phases-out");
const el_7_neutral_out = document.getElementById("7-neutral-out");
const el_7_phases_final_out = document.getElementById("7-phases-final-out");
const el_7_neutral_final_out = document.getElementById("7-neutral-final-out");
const el_footer_button_container = document.querySelector(".footer-button-container");
const el_calculate = document.getElementById("calculate");
const elementsWithMinAttribute = [
    el_1_area,
    el_1_small_app_va,
    el_1_small_app_circuits,
    el_1_laundry_va,
    el_2_dishwasher_va,
    el_2_disposer_va,
    el_2_compactor_va,
    el_2_water_heater_va,
    el_2_cust_app_1_va,
    el_2_cust_app_2_va,
    el_2_cust_app_3_va,
    el_3_dryer_va,
    el_3_dryer_percent,
    el_4_col_a_va,
    el_4_col_a_num,
    el_4_col_b_va,
    el_4_col_b_num,
    el_4_col_c_va,
    el_4_col_c_num,
    el_5_heating_unit_va,
    el_5_ac_unit_va,
    el_5_heat_pump_va,
    el_6_phases_va,
    el_6_neutral_va,
    el_7_service_voltage,
];

/**
 * Match the width of the footer button container to the width of the main content area.
 */
function resizeFooterWidth() {
    const width = el_main.getBoundingClientRect().width;
    el_footer_button_container.style.width = width + 'px';
}

/**
 * Run the calculation based on the input values and update the output fields accordingly.
 * This function is called immediately to initialize the output fields.
 */
function runCalc() {
    if (!vData) {
        el_code_year.innerHTML = `<em style="color: red;">Error: invalid code year provided (year: ${year})</em>`;
        return;
    }

    /* Ensure all inputs with a min attribute have a value that is at least the min value */
    elementsWithMinAttribute.forEach(el => {
        if (el.value === '' || parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
    });

    el_code_year.innerHTML = `based on the ${vData.year} <em style="margin: 0 -0.25rem 0 0;">National Electrical Code</em><sup style="font-size: 0.7em;">®</sup>`;

    el_1_area_out.value = el_1_area.value * 2;
    el_1_small_app_out.value = el_1_small_app_va.value * el_1_small_app_circuits.value;
    el_1_laundry_out.value = el_1_laundry_va.value * 1;
    el_1_subtotal_out.value = parseInt(el_1_area_out.value) + parseInt(el_1_small_app_out.value) + parseInt(el_1_laundry_out.value);
    el_1_first_va.value = Math.min(parseInt(el_1_subtotal_out.value), 3000);
    el_1_first_out.value = parseInt(el_1_first_va.value) * 1;
    el_1_next_va.value = Math.min(Math.max(parseInt(el_1_subtotal_out.value) - 3000, 0), 117000);
    el_1_next_out.value = parseInt(el_1_next_va.value) * 0.35;
    el_1_remaining_va.value = Math.max(parseInt(el_1_subtotal_out.value) - 120000, 0);
    el_1_remaining_out.value = parseInt(el_1_remaining_va.value) * 0.25;
    el_1_total_out.value = parseInt(el_1_first_out.value) + parseInt(el_1_next_out.value) + parseInt(el_1_remaining_out.value);
    el_1_phases_out.value = parseInt(el_1_total_out.value);
    el_1_neutral_out.value = parseInt(el_1_total_out.value);

    const _fixed_apps = [
        { value: parseInt(el_2_dishwasher_va.value), neutral: el_2_dishwasher_neutral.checked },
        { value: parseInt(el_2_disposer_va.value), neutral: el_2_disposer_neutral.checked },
        { value: parseInt(el_2_compactor_va.value), neutral: el_2_compactor_neutral.checked },
        { value: parseInt(el_2_water_heater_va.value), neutral: el_2_water_heater_neutral.checked },
        { value: parseInt(el_2_cust_app_1_va.value), neutral: el_2_cust_app_1_neutral.checked },
        { value: parseInt(el_2_cust_app_2_va.value), neutral: el_2_cust_app_2_neutral.checked },
        { value: parseInt(el_2_cust_app_3_va.value), neutral: el_2_cust_app_3_neutral.checked },
    ].sort((a, b) => a.value - b.value);

    let _2_total_phases = _fixed_apps.reduce((sum, app) => sum + app.value, 0);
    if (_fixed_apps.filter(app => app.value > 0).length >= 4) {
        _2_total_phases = _2_total_phases * 0.75;
    }

    let _2_total_neutral = _fixed_apps.filter(app => app.neutral).slice(0, 4).reduce((sum, app) => app.neutral ? (sum + app.value) : sum, 0);
    if (_fixed_apps.filter(app => app.value > 0 && app.neutral).length >= 4) {
        _2_total_neutral = _2_total_neutral * 0.75;
    }

    el_2_total_phases_out.value = _2_total_phases;
    el_2_total_phases_75_out.value = _2_total_phases;
    el_2_total_neutral_out.value = _2_total_neutral;
    el_2_total_neutral_75_out.value = _2_total_neutral;
    el_2_phases_out.value = el_2_total_phases_75_out.value;
    el_2_neutral_out.value = el_2_total_neutral_75_out.value;

    el_3_dryer_out.value = Math.round(parseInt(el_3_dryer_va.value) * parseInt(el_3_dryer_percent.value) / 100);
    el_3_phases_out.value = el_3_dryer_out.value;
    el_3_neutral_out.value = Math.round(el_3_dryer_out.value * 0.70);

    el_4_col_a_out.value = Math.round(parseInt(el_4_col_a_va.value) * parseInt(el_4_col_a_num.value) / 100);
    el_4_col_b_out.value = Math.round(parseInt(el_4_col_b_va.value) * parseInt(el_4_col_b_num.value) / 100);
    el_4_col_c_out.value = Math.round(parseInt(el_4_col_c_va.value) * parseInt(el_4_col_c_num.value) / 100);
    el_4_total_out.value = parseInt(el_4_col_a_out.value) + parseInt(el_4_col_b_out.value) + parseInt(el_4_col_c_out.value);
    el_4_phases_out.value = el_4_total_out.value;
    el_4_neutral_out.value = Math.round(el_4_total_out.value * 0.70);

    el_5_heating_unit_out.value = parseInt(el_5_heating_unit_va.value);
    el_5_ac_unit_out.value = parseInt(el_5_ac_unit_va.value);
    el_5_heat_pump_out.value = parseInt(el_5_heat_pump_va.value);
    el_5_largest_load_va.value = Math.max(parseInt(el_5_heating_unit_va.value), parseInt(el_5_ac_unit_va.value), parseInt(el_5_heat_pump_va.value));
    el_5_phases_out.value = parseInt(el_5_largest_load_va.value);
    el_5_neutral_out.value = 0;

    el_6_phases_va_out.value = Math.round(parseInt(el_6_phases_va.value) * 0.25);
    el_6_neutral_va_out.value = Math.round(parseInt(el_6_neutral_va.value) * 0.25);
    el_6_phases_out.value = el_6_phases_va_out.value;
    el_6_neutral_out.value = el_6_neutral_va_out.value;

    el_7_service_voltage.value = el_7_service_voltage.value >= 1 ? el_7_service_voltage.value : 1;
    el_7_phases_out.value = parseInt(el_1_phases_out.value) + parseInt(el_2_phases_out.value) + parseInt(el_3_phases_out.value) + parseInt(el_4_phases_out.value) + parseInt(el_5_phases_out.value) + parseInt(el_6_phases_out.value);
    el_7_neutral_out.value = parseInt(el_1_neutral_out.value) + parseInt(el_2_neutral_out.value) + parseInt(el_3_neutral_out.value) + parseInt(el_4_neutral_out.value) + parseInt(el_5_neutral_out.value) + parseInt(el_6_neutral_out.value);
    el_7_phases_va.value = parseInt(el_1_phases_out.value) + parseInt(el_2_phases_out.value) + parseInt(el_3_phases_out.value) + parseInt(el_4_phases_out.value) + parseInt(el_5_phases_out.value) + parseInt(el_6_phases_out.value);
    el_7_phases_v.value = el_7_service_voltage.value;
    el_7_phases_a_out.value = (parseInt(el_7_phases_va.value) / parseInt(el_7_phases_v.value)).toFixed(1);
    el_7_neutral_va.value = parseInt(el_1_neutral_out.value) + parseInt(el_2_neutral_out.value) + parseInt(el_3_neutral_out.value) + parseInt(el_4_neutral_out.value) + parseInt(el_5_neutral_out.value) + parseInt(el_6_neutral_out.value);
    el_7_neutral_v.value = el_7_service_voltage.value;
    el_7_neutral_a_out.value = (parseInt(el_7_neutral_va.value) / parseInt(el_7_neutral_v.value)).toFixed(1);
    el_7_first_va.value = Math.min(parseInt(el_7_phases_a_out.value), 200).toFixed(1);
    el_7_first_out.value = (parseInt(el_7_first_va.value) * 1).toFixed(1);
    el_7_remaining_va.value = Math.max(parseInt(el_7_phases_a_out.value) - 200, 0).toFixed(1);
    el_7_remaining_out.value = (parseInt(el_7_remaining_va.value) * 0.25).toFixed(1);
    el_7_total_out.value = (parseInt(el_7_first_out.value) + parseInt(el_7_remaining_out.value)).toFixed(1);
    el_7_phases_final_out.value = el_7_total_out.value;
    el_7_neutral_final_out.value = el_7_neutral_a_out.value;
};

window.addEventListener("resize", resizeFooterWidth);
el_calculate.addEventListener("click", runCalc);

resizeFooterWidth();
runCalc();