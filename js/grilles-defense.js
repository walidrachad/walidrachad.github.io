const images2 = [
    "assets/images/grilles-defense/p (1).jpeg",
    "assets/images/grilles-defense/p (2).jpeg",
    "assets/images/grilles-defense/p (3).jpeg",
    "assets/images/grilles-defense/p (4).jpeg",
    "assets/images/grilles-defense/p (5).jpeg",
    "assets/images/grilles-defense/p (6).jpeg",
    "assets/images/grilles-defense/p (7).jpeg",
    "assets/images/grilles-defense/p (8).jpeg",
    "assets/images/grilles-defense/p (9).jpeg",
    "assets/images/grilles-defense/p (10).jpeg",
    "assets/images/grilles-defense/p (11).jpeg",
    "assets/images/grilles-defense/p (12).jpeg",
    "assets/images/grilles-defense/p (13).jpeg",
    "assets/images/grilles-defense/p (14).jpeg",
    "assets/images/grilles-defense/p (15).jpeg",
    "assets/images/grilles-defense/p (16).jpeg",
    "assets/images/grilles-defense/p (17).jpeg",
    "assets/images/grilles-defense/p (18).jpeg",
    "assets/images/grilles-defense/p (19).jpeg",
    "assets/images/grilles-defense/p (20).jpeg",
    "assets/images/grilles-defense/p (21).jpeg",
    "assets/images/grilles-defense/p (22).jpeg",
    "assets/images/grilles-defense/p (23).jpeg",
    "assets/images/grilles-defense/p (24).jpeg",
    "assets/images/grilles-defense/p (25).jpeg",
    "assets/images/grilles-defense/p (26).jpeg",
    "assets/images/grilles-defense/p (27).jpeg",
    "assets/images/grilles-defense/p (28).jpeg",
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