const recommendations = {
  learning: ['Arduino + standard servos', 'Affordable, repairable, and perfect for learning the gait fundamentals.'],
  research: ['ROS 2 + smart servos', 'Built for sensors, autonomy experiments, and more precise movement control.'],
  field: ['Rugged frame + high-torque servos', 'Prioritize torque, weather protection, and battery capacity for uneven terrain.']
};
const picker = document.querySelector('#useCase');
picker?.addEventListener('change', event => {
  const choice = recommendations[event.target.value];
  document.querySelector('#recommendation').textContent = choice[0];
  document.querySelector('#recText').textContent = choice[1];
});
