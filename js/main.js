nasv = prompt("Введите название города");
time = prompt("Введите год образования города");
nas = prompt("Введите количество населения города");

time_ok = 2023 - time;
alert(
  "Городу " + nasv + " исполнилось " + time_ok + " лет с момента его образования. Население - " + nas + " человек"
);
