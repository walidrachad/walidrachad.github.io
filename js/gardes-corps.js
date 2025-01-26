const images1 = [    
    "assets/images/gardes-corps/p (1).jpeg",
    "assets/images/gardes-corps/p (2).jpeg",
    "assets/images/gardes-corps/p (3).jpeg",
    "assets/images/gardes-corps/p (4).jpeg",
    "assets/images/gardes-corps/p (5).jpeg",
    "assets/images/gardes-corps/p (6).jpeg",
    "assets/images/gardes-corps/p (7).jpeg",
    "assets/images/gardes-corps/p (8).jpeg",
    "assets/images/gardes-corps/p (9).jpeg",
    "assets/images/gardes-corps/p (10).jpeg",
    "assets/images/gardes-corps/p (11).jpeg",
    "assets/images/gardes-corps/p (12).jpeg",
    "assets/images/gardes-corps/p (13).jpeg",
    "assets/images/gardes-corps/p (14).jpeg",
    "assets/images/gardes-corps/p (15).jpeg",
    "assets/images/gardes-corps/p (16).jpeg",
    "assets/images/gardes-corps/p (17).jpeg",
    "assets/images/gardes-corps/p (18).jpeg",
    "assets/images/gardes-corps/p (19).jpeg",
    "assets/images/gardes-corps/p (20).jpeg",
    "assets/images/gardes-corps/p (21).jpeg",
    "assets/images/gardes-corps/p (22).jpeg",
    "assets/images/gardes-corps/p (23).jpeg",
    "assets/images/gardes-corps/p (24).jpeg",
    "assets/images/gardes-corps/p (25).jpeg",
    "assets/images/gardes-corps/p (26).jpeg",
    "assets/images/gardes-corps/p (27).jpeg",
    "assets/images/gardes-corps/p (28).jpeg",
    "assets/images/gardes-corps/p (29).jpeg",
    "assets/images/gardes-corps/p (30).jpeg",
    "assets/images/gardes-corps/p (31).jpeg",
    "assets/images/gardes-corps/p (32).jpeg",
    "assets/images/gardes-corps/p (33).jpeg",
    "assets/images/gardes-corps/p (34).jpeg",
    "assets/images/gardes-corps/p (35).jpeg",
    "assets/images/gardes-corps/p (36).jpeg",
    "assets/images/gardes-corps/p (37).jpeg",
    "assets/images/gardes-corps/p (38).jpeg",
    "assets/images/gardes-corps/p (39).jpeg",
    "assets/images/gardes-corps/p (40).jpeg",
    "assets/images/gardes-corps/p (41).jpeg",
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