const images3 = [
    "assets/images/machines/s1.jpeg",
    "assets/images/machines/s2.jpeg",
    "assets/images/machines/s3.jpeg",
    "assets/images/machines/s4.jpeg",
    "assets/images/machines/s5.jpeg",
    "assets/images/machines/s6.jpeg",
    "assets/images/machines/s7.jpeg",
    "assets/images/machines/s8.jpeg",
    "assets/images/machines/s9.jpeg",
    "assets/images/machines/s10.jpeg",

];
images3.forEach((src) => {
    document.write(`
        <div class="col-md-4 col-sm-6">
            <div class="single-explore-item">
                <div class="single-explore-img">
                    <img style="object-fit: cover;" src="${src}" alt="explore image">
                </div>
            </div>
        </div>
    `);
});