// приклад без бібліотек==================================
const dateNow = Date.now();

const dateTemplate = date => {
  const createAt = new Date(date);
  const year = createAt.getFullYear();
  const month = (createAt.getMonth() + 1).toString().padStart(2, 0);
  const day = createAt.getDate().toString().padStart(2, 0);
  const hours = createAt.getHours().toString().padStart(2, 0);
  const minutes = createAt.getMinutes().toString().padStart(2, 0);
  const seconds = createAt.getSeconds().toString().padStart(2, 0);

  const formatedDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`; // YYYY/MM/DD HH:MM:SS
  return `<p>${formatedDate}</p>`;
};

const blockDate = document.querySelector('.js-date');
blockDate.innerHTML = dateTemplate(dateNow);

// приклад с бібліотекою в parcel-test(date)
