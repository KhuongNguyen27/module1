class ElectricLamp {
    constructor(status) {
      this.status = status;
    }
    turnOn() {
      return (this.status = true);
    }
    turnOff() {
      return (this.status = false);
    }
  }
  class SwitchButton {
    constructor() {
      this.status = false;
      this.lamp = null;
      this.battery = null;
    }
    connectToLamp(ElectricLamp) {
      this.lamp = ElectricLamp;
    }
    setBattery(battery) {
      this.battery = battery;
    }
    turnOff() {
        this.lamp.status = false;
        this.battery.decreaseEnergy();
    }
    turnOn() {
        if (this.battery.isEmpty) {
            this.lamp.status = true;
            this.battery.decreaseEnergy();
            return true;
        } else return false;
    }
}
class Battery {
    constructor() {
      this.energy = 10;
    }
    setEnergy() {
        this.energy ++;
    }
    getEnergy() {
        return this.energy;
    }
    decreaseEnergy() {
        this.energy--;
    }
    isEmpty() {
        if (this.energy <= 0){ 
            return false}
            else{  
                return true;}
            }
    SacPin() {
    this.energy = 0;
    for (let i = 1; i <= 10; i++) {
      this.setEnergy();
    }
    EnergyDisplay();
  }
}
let congtac = new SwitchButton();
let den = new ElectricLamp();
let Energy = new Battery();
congtac.connectToLamp(den);
congtac.setBattery(Energy);
let canvas = document.getElementById("myCanvas").getContext("2d");
canvas.fillStyle = "red";
canvas.fillRect(0, 150, 250, 100);
canvas.fillStyle = "blue";
canvas.fillRect(250, 140, 60, 120);
function EnergyDisplay(){
  if(Energy.getEnergy() <=0)
    document.getElementById("EnergyDisplay").innerHTML = 0;
  else
    document.getElementById("EnergyDisplay").innerHTML = Energy.getEnergy();  
}
function TurnOn() {
    if(Energy.isEmpty()){      
        congtac.turnOn()
        canvas.fillStyle = "orange";
        canvas.fillRect(310, 140, 200, 120);
        EnergyDisplay();
    }else
    TurnOff();
}
function TurnOff() {
    congtac.turnOff();
    canvas.clearRect(310, 140, 200, 120);
    EnergyDisplay();
}