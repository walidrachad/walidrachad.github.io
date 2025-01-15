const images1 = [
    "assets/images/gardes-corps/s1.jpeg",
    "assets/images/gardes-corps/s2.jpeg",
    "assets/images/gardes-corps/s3.jpeg",
    "assets/images/gardes-corps/s4.jpeg",
    "assets/images/gardes-corps/s5.jpeg",
    "assets/images/gardes-corps/s6.jpeg",
    "assets/images/gardes-corps/s7.jpeg",
    "assets/images/gardes-corps/s8.jpeg",
    "assets/images/gardes-corps/s9.jpeg",
    "assets/images/gardes-corps/s10.jpeg",
];
images1.forEach((src) => {
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