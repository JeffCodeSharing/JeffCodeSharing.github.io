fetch("https://jeffcodesharing.github.io/files/mc_recording_program/versions.json")
  .then(response => response.json())
  .then(data => {
    const versions = data.versions;
    const release = data.release;

    const release_list = document.getElementById("release_list");

    const release_item = document.createElement("li");
    const release_link = document.createElement("a");

    release_link.textContent = release;
    release_link.setAttribute("download", release + ".rar");
    release_link.href = 
      "https://jeffcodesharing.github.io/files/mc_recording_program/" + release + ".rar";
    
    release_item.appendChild(release_link);
    release_list.appendChild(release_item);

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
