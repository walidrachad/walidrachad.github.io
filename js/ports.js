const images4 = [
    "assets/images/ports/s1.jpeg",
    "assets/images/ports/s2.jpeg",
    "assets/images/ports/s3.jpeg",
    "assets/images/ports/s4.jpeg",
    "assets/images/ports/s5.jpeg",
    "assets/images/ports/s6.jpeg",
    "assets/images/ports/s7.jpeg",
    "assets/images/ports/s8.jpeg",
    "assets/images/ports/s9.jpeg",
    "assets/images/ports/s10.jpeg",
];
images4.forEach((src) => {
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