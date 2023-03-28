const userID = "738748102311280681";
const statusImage = document.getElementById("status-image");

async function fetchDiscordStatus() {
  try {
    const response = await axios.get(
      `https://api.lanyard.rest/v1/users/${userID}`
    );
    const { data } = response.data;
    const { discord_status, activities } = data;

    // Lấy đường dẫn hình ảnh tương ứng với trạng thái
    let imagePath;
    switch (discord_status) {
      case "online":
        imagePath = "/public/status/online.svg";
        break;
      case "idle":
        imagePath = "/public/status/idle.svg";
        break;
      case "dnd":
        imagePath = "/public/status/dnd.svg";
        break;
      case "offline":
        imagePath = "/public/status/offline.svg";
        break;
      default:
        imagePath = "";
        break;
    }

    // Kiểm tra trạng thái hoạt động để cập nhật đường dẫn hình ảnh
    if (
      activities.find(
        (activity) => activity.type === 1 && activity.url.includes("twitch.tv")
      )
    ) {
      imagePath = "/public/status/streaming.svg";
    }

    // Cập nhật hình ảnh
    statusImage.src = imagePath;
    statusImage.alt = `Trạng thái Discord: ${discord_status}`;
  } catch (error) {
    console.error("Không thể lấy trạng thái Discord:", error);
  }
}

fetchDiscordStatus();
setInterval(fetchDiscordStatus, 1000); // Update status every 5 seconds
