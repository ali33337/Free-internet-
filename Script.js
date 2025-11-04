let points = 0;

document.getElementById('claimBtn').addEventListener('click', function() {
  const video = document.getElementById('earnVideo');
  if (video.currentTime >= video.duration - 2) {
    points += 10;
    document.getElementById('points').textContent = points;
    document.getElementById('message').textContent = '🎉 آپ کو 10 پوائنٹس مل گئے!';
  } else {
    document.getElementById('message').textContent = '⚠️ پوری ویڈیو دیکھیں تبھی پوائنٹس ملیں گے!';
  }
});
