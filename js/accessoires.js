const accessoires = [
    "assets/images/accessoires/p (2).jpeg",
    "assets/images/accessoires/p (3).jpeg",
    "assets/images/accessoires/p (4).jpeg",
    "assets/images/accessoires/p (5).jpeg",
    "assets/images/accessoires/p (6).jpeg",
    "assets/images/accessoires/p (7).jpeg",
    "assets/images/accessoires/p (8).jpeg",
    "assets/images/accessoires/p (9).jpeg",
    "assets/images/accessoires/p (10).jpeg",
    "assets/images/accessoires/p (11).jpeg",
    "assets/images/accessoires/p (12).jpeg",
    "assets/images/accessoires/p (13).jpeg",
    "assets/images/accessoires/p (14).jpeg",
    "assets/images/accessoires/p (15).jpeg",
    "assets/images/accessoires/p (16).jpeg",
    "assets/images/accessoires/p (17).jpeg",
    "assets/images/accessoires/p (18).jpeg",
    "assets/images/accessoires/p (19).jpeg",
    "assets/images/accessoires/p (20).jpeg",
    "assets/images/accessoires/p (21).jpeg",
    "assets/images/accessoires/p (22).jpeg",
    "assets/images/accessoires/p (23).jpeg",
   
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
