const vData = versionData.find(v => v.year === year);
const el_code_year = document.getElementById("code-year");
const el_main = document.querySelector("main");

const el_1_heating_unit_1 = document.getElementById("1-heating-unit-1");
const el_1_heating_unit_2 = document.getElementById("1-heating-unit-2");
const el_1_heating_unit_1_out = document.getElementById("1-heating-unit-1-out");
const el_1_heating_unit_2_out = document.getElementById("1-heating-unit-2-out");
const el_1_ac_unit = document.getElementById("1-ac-unit");
const el_1_ac_unit_out = document.getElementById("1-ac-unit-out");
const el_1_heat_pump = document.getElementById("1-heat-pump");
const el_1_heat_pump_out = document.getElementById("1-heat-pump-out");
const el_1_largest_load_out = document.getElementById("1-largest-load-out");
const el_1_phases_out = document.getElementById("1-phases-out");

const el_2_general_lighting_va = document.getElementById("2-general-lighting-va");
const el_2_general_lighting_sqft = document.getElementById("2-general-lighting-sqft");
const el_2_general_lighting_out = document.getElementById("2-general-lighting-out");
const el_2_small_app_va = document.getElementById("2-small-app-va");
const el_2_small_app_circuits = document.getElementById("2-small-app-circuits");
const el_2_small_app_out = document.getElementById("2-small-app-out");
const el_2_dishwasher_va = document.getElementById("2-dishwasher-va");
const el_2_disposer_va = document.getElementById("2-disposer-va");
const el_2_compactor_va = document.getElementById("2-compactor-va");
const el_2_water_heater_va = document.getElementById("2-water-heater-va");
const el_2_cust_app_1_va = document.getElementById("2-cust-app-1-va");
const el_2_cust_app_2_va = document.getElementById("2-cust-app-2-va");
const el_2_cust_app_3_va = document.getElementById("2-cust-app-3-va");
const el_2_special_out = document.getElementById("2-special-out");
const el_2_subtotal_out = document.getElementById("2-subtotal-out");
const el_2_first_va = document.getElementById("2-first-va");
const el_2_first_out = document.getElementById("2-first-out");
const el_2_remaining_va = document.getElementById("2-remaining-va");
const el_2_remaining_out = document.getElementById("2-remaining-out");
const el_2_total_out = document.getElementById("2-total-out");
const el_2_phases_out = document.getElementById("2-phases-out");

const el_3_phases_1_va = document.getElementById("3-phases-1-va");
const el_3_phases_2_va = document.getElementById("3-phases-2-va");
const el_3_total_connected_out = document.getElementById("3-total-connected-out");
const el_3_phases_out = document.getElementById("3-phases-out");

const el_4_gen_va = document.getElementById("4-gen-va");
const el_4_fixed_app_va = document.getElementById("4-fixed-app-va");
const el_4_dryer_va = document.getElementById("4-dryer-va");
const el_4_cooking_va = document.getElementById("4-cooking-va");
const el_4_compactor_va = document.getElementById("4-compactor-va");
const el_4_water_heater_va = document.getElementById("4-water-heater-va");
const el_4_total_out = document.getElementById("4-total-out");
const el_4_neutral_out = document.getElementById("4-neutral-out");

const el_5_service_voltage = document.getElementById("5-service-voltage");
const el_5_phases_va = document.getElementById("5-phases-va");
const el_5_phases_v = document.getElementById("5-phases-v");
const el_5_phases_a_out = document.getElementById("5-phases-a-out");
const el_5_neutral_va = document.getElementById("5-neutral-va");
const el_5_neutral_v = document.getElementById("5-neutral-v");
const el_5_neutral_a_out = document.getElementById("5-neutral-a-out");
const el_5_phases_final_out = document.getElementById("5-phases-final-out");
const el_5_neutral_final_out = document.getElementById("5-neutral-final-out");

const el_footer_button_container = document.querySelector(".footer-button-container");
const el_calculate = document.getElementById("calculate");
const el_summary = document.getElementById("summary");
const elementsWithMinAttribute = [
    el_1_heating_unit_1,
    el_1_heating_unit_2,
    el_1_ac_unit,
    el_1_heat_pump,
    el_2_general_lighting_va,
    el_2_general_lighting_out,
    el_2_small_app_va,
    el_2_small_app_circuits,
    el_2_dishwasher_va,
    el_2_disposer_va,
    el_2_compactor_va,
    el_2_water_heater_va,
    el_2_cust_app_1_va,
    el_2_cust_app_2_va,
    el_2_cust_app_3_va,
    el_4_gen_va,
    el_4_fixed_app_va,
    el_4_dryer_va,
    el_4_cooking_va,
    el_4_compactor_va,
    el_4_water_heater_va,
    el_5_service_voltage
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

    el_1_heating_unit_1_out.innerHTML = parseInt(el_1_heating_unit_1.value) * 0.65;
    el_1_heating_unit_2_out.innerHTML = parseInt(el_1_heating_unit_2.value) * 0.4;
    el_1_ac_unit_out.innerHTML = parseInt(el_1_ac_unit.value) * 1;
    el_1_heat_pump_out.innerHTML = parseInt(el_1_heat_pump.value) * 1;
    el_1_largest_load_out.innerHTML = Math.max(parseInt(el_1_heating_unit_1_out.innerHTML), parseInt(el_1_heating_unit_2_out.innerHTML), parseInt(el_1_ac_unit_out.innerHTML), parseInt(el_1_heat_pump_out.innerHTML));
    el_1_phases_out.innerHTML = parseInt(el_1_largest_load_out.innerHTML);

    el_2_general_lighting_sqft.innerHTML = `sq ft &times; ${vData.categories.generalLighting.areaMultiplier} VA =`;
    el_2_general_lighting_out.innerHTML = parseInt(el_2_general_lighting_va.value) * vData.categories.generalLighting.areaMultiplier;
    el_2_small_app_out.innerHTML = parseInt(el_2_small_app_va.value) * parseInt(el_2_small_app_circuits.value);

    const _fixed_apps = [
        parseInt(el_2_dishwasher_va.value),
        parseInt(el_2_disposer_va.value),
        parseInt(el_2_compactor_va.value),
        parseInt(el_2_water_heater_va.value),
        parseInt(el_2_cust_app_1_va.value),
        parseInt(el_2_cust_app_2_va.value),
        parseInt(el_2_cust_app_3_va.value),
    ].sort((a, b) => a - b);

    el_2_special_out.innerHTML = _fixed_apps.reduce((sum, app) => sum + app, 0);
    el_2_subtotal_out.innerHTML = parseInt(el_2_general_lighting_out.innerHTML) + parseInt(el_2_small_app_out.innerHTML) + parseInt(el_2_special_out.innerHTML);
    el_2_first_va.innerHTML = Math.min(parseInt(el_2_subtotal_out.innerHTML), 8000);
    el_2_first_out.innerHTML = parseInt(el_2_first_va.innerHTML) * 1;
    el_2_remaining_va.innerHTML = Math.max(parseInt(el_2_subtotal_out.innerHTML) - 8000, 0);
    el_2_remaining_out.innerHTML = parseInt(el_2_remaining_va.innerHTML) * 0.4;
    el_2_total_out.innerHTML = parseInt(el_2_first_out.innerHTML) + parseInt(el_2_remaining_out.innerHTML);
    el_2_phases_out.innerHTML = parseInt(el_2_total_out.innerHTML);

    el_3_phases_1_va.innerHTML = el_1_phases_out.innerHTML;
    el_3_phases_2_va.innerHTML = el_2_phases_out.innerHTML;
    el_3_total_connected_out.innerHTML = parseInt(el_3_phases_1_va.innerHTML) + parseInt(el_3_phases_2_va.innerHTML);
    el_3_phases_out.innerHTML = el_3_total_connected_out.innerHTML;

    el_4_total_out.innerHTML = parseInt(el_4_gen_va.value) + parseInt(el_4_fixed_app_va.value) + parseInt(el_4_dryer_va.value) + parseInt(el_4_cooking_va.value) + parseInt(el_4_compactor_va.value) + parseInt(el_4_water_heater_va.value);
    el_4_neutral_out.innerHTML = el_4_total_out.innerHTML;

    el_5_service_voltage.innerHTML = parseInt(el_5_service_voltage.value) >= 1 ? parseInt(el_5_service_voltage.value) : 1;
    el_5_phases_va.innerHTML = el_3_phases_out.innerHTML;
    el_5_phases_v.innerHTML = el_5_service_voltage.value;
    el_5_phases_a_out.innerHTML = (parseInt(el_5_phases_va.innerHTML) / (parseInt(el_5_phases_v.innerHTML))).toFixed(1);
    el_5_neutral_va.innerHTML = el_4_neutral_out.innerHTML;
    el_5_neutral_v.innerHTML = el_5_service_voltage.value;
    el_5_neutral_a_out.innerHTML = (parseInt(el_5_neutral_va.innerHTML) / (parseInt(el_5_neutral_v.innerHTML))).toFixed(1);
    el_5_phases_final_out.innerHTML = el_5_phases_a_out.innerHTML;
    el_5_neutral_final_out.innerHTML = el_5_neutral_a_out.innerHTML;

    el_summary.innerHTML = `Summary: Calculated Phases Ampacity = ${el_5_phases_final_out.innerHTML} amps. Calculated Neutral Ampacity = ${el_5_neutral_final_out.innerHTML} amps.`;
};

window.addEventListener("resize", resizeFooterWidth);
el_calculate.addEventListener("click", runCalc);

resizeFooterWidth();
runCalc();