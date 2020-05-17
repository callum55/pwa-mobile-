//check to see if browser support service worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/serviceworker.js')
    .then((reg) => console.log('service worker working', reg))
    .catch((err) => console.log ('service worker not working', err));
}




//geolocation for where they are on there ride
var x = document.getElementById("Lost");

function getLocation() {
  if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
  } else { x.innerHTML = "Geolocation is not supported by your phone";
  }
}
function showPosition(position) {
  x.innerHTML = "Your Latitude is: " + position.coords.latitude + 
  "<br>Your Longitude is: " + position.coords.longitude + "  Found You Now Keep Riding";
 
}





//battery level see if they can o riding or how long u got left to ride
window.onload = function () {
  function updateBatteryStatus(battery) {
    document.querySelector('#chargingStatus').textContent = battery.charging ? 'Charging (nearly time to ride)' : 'Not charging (enjoy the ride)';
    document.querySelector('#batteryLevel').textContent = battery.level + " Battery Percentage Left for Ride";

  }

  navigator.getBattery().then(function(battery) {
    updateBatteryStatus(battery);
    battery.onchargingchange = function () {
      updateBatteryStatus(battery);
    };
    battery.onlevelchange = function () {
      updateBatteryStatus(battery);
    };
  });
};


//notification for encouragme
function BikeEncourgment() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  else if (Notification.permission === "granted") {
    var notification = new Notification("Go Shred It On Them Trails & Jumps! Mahalo My Dude");
  }

  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Hi Go Shred It On Them Trails & Jumps! Mahalo My Dude");
      }
    });
  }
}



