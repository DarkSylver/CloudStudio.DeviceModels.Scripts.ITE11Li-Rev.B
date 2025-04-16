function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
  config.addressLabel = {en: "DevEUI", es: "DevEUI"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // This function allows you to indicate the initial endpoint configuration
  // when a device is created using this model. This improves end-user 
  // experience significantly, because it allows the platform to create
  // all endpoints included in the device automatically when the device
  // is created.

  // In the code below, two endpoints are created. The first is a
  // temperature sensor, while the second one is a carbon dioxide sensor.

  endpoints.addEndpoint("1", "Temperature sensor", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Frequency sensor", endpointType.frequencyMeter);
  endpoints.addEndpoint("3", "Phase A Voltage Sensor", endpointType.voltageSensor);
  endpoints.addEndpoint("4", "Phase A Current Sensor", endpointType.currentSensor);
  endpoints.addEndpoint("5", "Phase A Power Factor", endpointType.cosPhiSensor);
  var ae = endpoints.addEndpoint("6", "Phase A Active Energy", endpointType.genericSensor);
  ae.variableTypeId = 1215;
  var re = endpoints.addEndpoint("7", "Phase A Reactive Energy", endpointType.genericSensor);
  re.variableTypeId = 1216;
  endpoints.addEndpoint("8", "Phase A Apparent Power", endpointType.apparentPowerSensor);
  endpoints.addEndpoint("9", "Phase A Active Power", endpointType.activePowerSensor);
  endpoints.addEndpoint("10", "Phase A Reactive Power", endpointType.reactivePowerSensor);
    endpoints.addEndpoint("11", "Phase B Voltage Sensor", endpointType.voltageSensor);
  endpoints.addEndpoint("12", "Phase B Current Sensor", endpointType.currentSensor);
  endpoints.addEndpoint("13", "Phase B Power Factor", endpointType.cosPhiSensor);
  var ae = endpoints.addEndpoint("14", "Phase B Active Energy", endpointType.genericSensor);
  ae.variableTypeId = 1215;
  var re = endpoints.addEndpoint("15", "Phase B Reactive Energy", endpointType.genericSensor);
  re.variableTypeId = 1216;
  endpoints.addEndpoint("16", "Phase B Apparent Power", endpointType.apparentPowerSensor);
  endpoints.addEndpoint("17", "Phase B Active Power", endpointType.activePowerSensor);
  endpoints.addEndpoint("18", "Phase B Reactive Power", endpointType.reactivePowerSensor);
    endpoints.addEndpoint("19", "Phase C Voltage Sensor", endpointType.voltageSensor);
  endpoints.addEndpoint("20", "Phase C Current Sensor", endpointType.currentSensor);
  endpoints.addEndpoint("21", "Phase C Power Factor", endpointType.cosPhiSensor);
  var ae = endpoints.addEndpoint("22", "Phase C Active Energy", endpointType.genericSensor);
  ae.variableTypeId = 1215;
  var re = endpoints.addEndpoint("23", "Phase C Reactive Energy", endpointType.genericSensor);
  re.variableTypeId = 1216;
  endpoints.addEndpoint("24", "Phase C Apparent Power", endpointType.apparentPowerSensor);
  endpoints.addEndpoint("25", "Phase C Active Power", endpointType.activePowerSensor);
  endpoints.addEndpoint("26", "Phase C Reactive Power", endpointType.reactivePowerSensor);
  var ae = endpoints.addEndpoint("27", "Total Active Energy", endpointType.genericFlowSensor);
  ae.variableTypeId = 1215;
  var re = endpoints.addEndpoint("28", "Total Reactive Energy", endpointType.genericFlowSensor);
  re.variableTypeId = 1216;
}

function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
  rules.canDelete = false;
  rules.canEditSubType = true;
}
