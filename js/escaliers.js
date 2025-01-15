const images = [
    "assets/images/escaliers/s1.jpg",
    "assets/images/escaliers/s2.jpg",
    "assets/images/escaliers/s3.jpg",
    "assets/images/escaliers/s4.jpg",
    "assets/images/escaliers/s5.jpg",
    "assets/images/escaliers/s6.jpg",
    "assets/images/escaliers/s7.jpg",
    "assets/images/escaliers/s8.jpg",
    "assets/images/escaliers/s9.jpg",
    "assets/images/escaliers/s10.jpg",
    "assets/images/escaliers/13.png",
];
images.forEach((src) => {
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
