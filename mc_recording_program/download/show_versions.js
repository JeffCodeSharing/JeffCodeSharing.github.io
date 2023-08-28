fetch("https://jeffcodesharing.github.io/files/mc_recording_program/versions.json")
  .then(response => response.json())
  .then(data => {
    const versions = data.versions;
    const release = data.release;

    const list = document.getElementById("version_list");

    versions.forEach(version => {
      const item = document.createElement("li");
      const link = document.createElement("a");

      link.textContent = version;
      link.setAttribute("download", version + ".rar");
      link.href =
        "https://jeffcodesharing.github.io/files/mc_recording_program/" + version + ".rar";

      item.appendChild(link);
      list.appendChild(item);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
