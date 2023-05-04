const drugs = [
        {
            name: "Abilify", 
            othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
            genericNames: ["Aripiprazole", "Another Generic Name"],
            type: "Brand",
            dosage: {
                form: "Tablet",
                strength: "10 mg",
                frequency: "Once daily"
            },
            description: "A medication used to treat schizophrenia, bipolar disorder, and depression. It works by affecting the activity of certain neurotransmitters in the brain, including dopamine and serotonin. It is also sometimes used to treat irritability associated with autism spectrum disorder."
        },
        { 
                name: "Adderall", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand",  
                description: "a stimulant medication used to treat ADHD and narcolepsy. It works by increasing the activity of certain chemicals in the brain. "
        },
        { 
                name: "Adderall XR", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an extended-release version of Adderall that provides a longer duration of action than regular Adderall. " 
        },
        { 
                name: "Adrenaline", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "also known as epinephrine, a hormone and medication used to treat severe allergic reactions and cardiac arrest. It works by increasing heart rate, constricting blood vessels, and relaxing smooth muscles. "
        },
        { 
                name: "Albuterol Sulfate", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a bronchodilator medication used to treat asthma and other breathing disorders. It works by relaxing the muscles in the airways, making it easier to breathe. "
        },
        { 
                name: "Aldactone", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a diuretic medication used to treat high blood pressure and heart failure. It works by blocking the action of aldosterone, a hormone that promotes salt and water retention in the body. " 
        },
        { 
                name: "Allegra", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an antihistamine medication used to treat allergies. It works by blocking the action of histamine, a chemical that is released during an allergic reaction. " 
        },
        { 
                name: "Ambien",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a sedative medication used to treat insomnia. It works by slowing down brain activity to help you fall asleep and stay asleep. " 
        },
        { 
                name: "Amikin",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an antibiotic medication used to treat serious bacterial infections. It works by interfering with the production of bacterial proteins necessary for their growth and reproduction. " 
        },
        { 
                name: "Amoxicillin", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an antibiotic medication used to treat a variety of bacterial infections. It works by interfering with the production of bacterial cell walls, causing the bacteria to die. " 
        },
        { 
                name: "Antivert", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an antihistamine medication used to treat vertigo and motion sickness. It works by blocking the action of histamine in the inner ear, reducing dizziness and nausea. " 
        },
        { 
                name: "Aricept",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " 
        },
        { 
                name: "Armour Thyroid", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. " 
        },
        { 
                name: "Atarax", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " 
        },
        { 
                name: "Atenolol", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " 
        },
        { 
                name: "Ativan", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " 
        },
        { 
                name: "Bacolfen", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. "
        },
        { 
                name: "Bacitrim", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. "
        },
        { 
                name: "Benadryl",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " 
        },
        { 
                name: "Bentyl",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " 
        },
        { 
                name: "Benzonatate",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand",
                description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. "
        },
        { 
                name: "Bumex",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand",
                description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " 
        },
        { 
                name: "Buspar", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. "
        },
        { 
                name: "Carafate", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " 
        },
        { 
                name: "Catapres",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " 
        },
        { 
                name: "Ceftin", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand",
                description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " 
        },
        { 
                name: "Celebrex", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " 
        },
        {
                name: "Celexa",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand",
                description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. " 
        },
        { 
                name: "Cialis",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. "
        },
        { 
                name: "Cipro", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Generic", 
                description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " 
        },
        { 
                name: "Claritin", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. "
        },
        {
                name: "Clindamycin",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Generic", 
                description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " 
        },
        { 
                name: "Colchicine",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Generic",
                description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. "
        },
        { 
                name: "Concerta",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand - Narcotic",
                description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " 
        },
        { 
                name: "Coreg",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " 
        },
        { 
                name: "Coumadin", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand",
                description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. "
        },
        { 
                name: "Cozaar",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. " 
        },
        { 
                name: "Crestor",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " 
        },
        { 
                name: "Cymbalta",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " 
        },
        {
                name: "Cytomel",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand",
                description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. "
        },
        {
                name: "Cytotec", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " 
        },
        { 
                name: "Depakote", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. "
        },
        {
                name: "Desoxyn", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat anxiety and seizure disorders. It works by enhancing the activity of a chemical called GABA in the brain, which helps to calm nerve activity. " 
        },
        { 
                name: "Desyrel",
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand",
                description: "a medication used to treat Alzheimer's disease. It works by increasing the level of a chemical called acetylcholine in the brain, which is important for memory and learning. " 
        },
        { 
                name: "Dexamethasone", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "a medication used to treat an underactive thyroid gland. It contains thyroid hormone, which is important for regulating metabolism and energy levels. "
        },
        {
                name: "Diflucan", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Brand", 
                description: "an antihistamine medication used to treat anxiety and itching. It works by blocking the action of histamine in the body, reducing allergic reactions and anxiety symptoms. " 
        },
        { 
                name: "Dilaudid", 
                othernames: ["Aripiprazole", "Abilitat", "Aripiprex"],
                genericNames: ["Aripiprazole", "Another Generic Name"],
                type: "Generic", 
                description: "a beta blocker medication used to treat high blood pressure and angina. It works by blocking the action of adrenaline and other stress hormones, reducing heart rate and blood pressure. "
        }
];
