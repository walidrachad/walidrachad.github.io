const accessoires = [
    "assets/images/accessoires/s1.jpg",
    "assets/images/accessoires/s2.jpg",
    "assets/images/accessoires/s3.jpg",
    "assets/images/accessoires/s4.jpg",
    "assets/images/accessoires/s5.jpg",
    "assets/images/accessoires/s6.jpg",
    "assets/images/accessoires/s7.jpg",
    "assets/images/accessoires/s8.jpg",
    "assets/images/accessoires/s9.jpg",
    "assets/images/accessoires/s10.jpg",
   
];
accessoires.forEach((src) => {
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
