const images2 = [
    "assets/images/grilles-defense/s1.jpeg",
    "assets/images/grilles-defense/s2.jpeg",
    "assets/images/grilles-defense/s3.jpeg",
    "assets/images/grilles-defense/s4.jpeg",
    "assets/images/grilles-defense/s5.jpeg",
    "assets/images/grilles-defense/s6.jpeg",
    "assets/images/grilles-defense/s7.jpeg",
    "assets/images/grilles-defense/s8.jpeg",
    "assets/images/grilles-defense/s9.jpeg",
    "assets/images/grilles-defense/s10.jpeg",
];
images2.forEach((src) => {
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