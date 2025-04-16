function parseUplink(device, payload)
{
    /*function ExtractTagData(tagValuesObject){
        n = null;
        u = null;
        v = null;
        return {
            n: tagValuesObject["n"],
            u: tagValuesObject["u"],
            v: tagValuesObject["v"],
        }
    }*/

    var KhompData = payload.asParsedObject();
    env.log(KhompData);

    var phase_a_active_energy = 0;
    var phase_a_reactive_energy = 0;
    var phase_b_active_energy = 0;
    var phase_b_reactive_energy = 0;
    var phase_c_active_energy = 0;
    var phase_c_reactive_energy = 0;

    for (let tag in KhompData) {
        env.log(tag);
        switch (tag){
            case "sensors":
                var sensorValues = KhompData[tag];
                if(sensorValues != null){
                    //Obtenemos cada sensor
                    sensorValues.forEach(sensorElement =>
                    {
                        //Listo, actualizamos el endpoint
                        if(sensorElement.n != null) env.log("value n " + sensorElement.n);
                        if(sensorElement.v != null) env.log("value v " + sensorElement.v);

                        switch (sensorElement.n)
                        {
                            case "temperature":
                                var temp = device.endpoints.byType(endpointType.temperatureSensor);
                                if(temp != null && sensorElement.v != null)
                                    temp.updateTemperatureSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "frequency":
                                var freq = device.endpoints.byType(endpointType.frequencyMeter);
                                if(freq != null && sensorElement.v != null)
                                    freq.updateFrequencySensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_a_voltage":
                                var volt = device.endpoints.byAddress("3");
                                if(volt != null && sensorElement.v != null)
                                    volt.updateVoltageSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_a_current":
                                var current = device.endpoints.byAddress("4");
                                if(current != null && sensorElement.v != null)
                                    current.updateCurrentSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_a_pwr_factor":
                                var pwrfactor = device.endpoints.byAddress("5");
                                if(pwrfactor != null && sensorElement.v != null)
                                    pwrfactor.updateCosPhiSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_a_active_energy":
                                var aenergy = device.endpoints.byAddress("6");
                                if(aenergy != null && sensorElement.v != null)
                                    aenergy.updateGenericSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                
                                if(sensorElement.v != null)
                                    phase_a_active_energy = phase_a_active_energy + sensorElement.v;
                                break;
                            case "phase_a_reactive_energy":
                                var arenergy = device.endpoints.byAddress("7");
                                if(arenergy != null && sensorElement.v != null)
                                    arenergy.updateGenericSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                
                                if(sensorElement.v != null)
                                    phase_a_reactive_energy = phase_a_reactive_energy + sensorElement.v;
                                break;
                            case "phase_a_apparent_power":
                                var apower = device.endpoints.byAddress("8");
                                if(apower != null && sensorElement.v != null)
                                    apower.updateApparentPowerSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_a_active_power":
                                var acpower = device.endpoints.byAddress("9");
                                if(acpower != null && sensorElement.v != null)
                                    acpower.updateActivePowerSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_a_reactive_power":
                                var rpower = device.endpoints.byAddress("10");
                                if(rpower != null && sensorElement.v != null)
                                    rpower.updateReactivePowerSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_b_voltage":
                                var volt = device.endpoints.byAddress("11");
                                if(volt != null && sensorElement.v != null)
                                    volt.updateVoltageSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_b_current":
                                var current = device.endpoints.byAddress("12");
                                if(current != null && sensorElement.v != null)
                                    current.updateCurrentSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_b_pwr_factor":
                                var pwrfactor = device.endpoints.byAddress("13");
                                if(pwrfactor != null && sensorElement.v != null)
                                    pwrfactor.updateCosPhiSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_b_active_energy":
                                var aenergy = device.endpoints.byAddress("14");
                                if(aenergy != null && sensorElement.v != null)
                                    aenergy.updateGenericSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                
                                if(sensorElement.v != null)
                                    phase_b_active_energy = phase_b_active_energy + sensorElement.v;
                                break;
                            case "phase_b_reactive_energy":
                                var arenergy = device.endpoints.byAddress("15");
                                if(arenergy != null && sensorElement.v != null)
                                    arenergy.updateGenericSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                
                                if(sensorElement.v != null)
                                    phase_b_reactive_energy = phase_b_reactive_energy + sensorElement.v;
                                break;
                            case "phase_b_apparent_power":
                                var apower = device.endpoints.byAddress("16");
                                if(apower != null && sensorElement.v != null)
                                    apower.updateApparentPowerSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_b_active_power":
                                var acpower = device.endpoints.byAddress("17");
                                if(acpower != null && sensorElement.v != null)
                                    acpower.updateActivePowerSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_b_reactive_power":
                                var rpower = device.endpoints.byAddress("18");
                                if(rpower != null && sensorElement.v != null)
                                    rpower.updateReactivePowerSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_c_voltage":
                                var volt = device.endpoints.byAddress("19");
                                if(volt != null && sensorElement.v != null)
                                    volt.updateVoltageSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_c_current":
                                var current = device.endpoints.byAddress("20");
                                if(current != null && sensorElement.v != null)
                                    current.updateCurrentSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_c_pwr_factor":
                                var pwrfactor = device.endpoints.byAddress("21");
                                if(pwrfactor != null && sensorElement.v != null)
                                    pwrfactor.updateCosPhiSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_c_active_energy":
                                var aenergy = device.endpoints.byAddress("22");
                                if(aenergy != null && sensorElement.v != null)
                                    aenergy.updateGenericSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                
                                if(sensorElement.v != null)
                                    phase_c_active_energy = phase_c_active_energy + sensorElement.v;
                                break;
                            case "phase_c_reactive_energy":
                                var arenergy = device.endpoints.byAddress("23");
                                if(arenergy != null && sensorElement.v != null)
                                    arenergy.updateGenericSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                
                                if(sensorElement.v != null)
                                    phase_c_reactive_energy = phase_c_reactive_energy + sensorElement.v;
                                break;
                            case "phase_c_apparent_power":
                                var apower = device.endpoints.byAddress("24");
                                if(apower != null && sensorElement.v != null)
                                    apower.updateApparentPowerSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "phase_c_active_power":
                                var acpower = device.endpoints.byAddress("25");
                                if(acpower != null && sensorElement.v != null)
                                    acpower.updateActivePowerSensorStatus(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "total_active_energy":
                                var ae = device.endpoints.byAddress("27");
                                if(ae != null && sensorElement.v != null)
                                    ae.updateFlowSensorValueSummation(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                            case "total_reactive_energy":
                                var re = device.endpoints.byAddress("28");
                                if(re != null && sensorElement.v != null)
                                    re.updateFlowSensorValueSummation(sensorElement.v);
                                else
                                    env.log("Endpoint Not Found or V is invalid");
                                break;
                        }
                    });
                }
                else
                    env.log("Sensor not null");
                break;
            default:
                //Si viene algún "tag" que no nos interesa procesar lo logueamos
                env.log("Unknown tag: " + tag)
                break;
        }
    }

    if( phase_a_active_energy != 0 || phase_b_active_energy != 0 || phase_c_active_energy != 0)
    {
        var ae = device.endpoints.byAddress("27");
        var ta = phase_a_active_energy + phase_b_active_energy + phase_c_active_energy;
        if(ae != null)
            ae.updateFlowSensorValueSummation(ta);
        else
            env.log("Endpoint Not Found or totalActive is invalid");
    }

    if( phase_a_reactive_energy != 0 || phase_b_reactive_energy != 0 || phase_c_reactive_energy != 0)
    {
        var re = device.endpoints.byAddress("28");
        var tr = phase_a_reactive_energy + phase_b_reactive_energy + phase_c_reactive_energy;
        if(re != null)
            re.updateFlowSensorValueSummation(tr);
        else
            env.log("Endpoint Not Found or totalReactive is invalid");
    }
}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/
}