const loginForm = document.getElementById('loginForm');
        const container = document.querySelector('.container');
        const nav = document.querySelector('nav');
        const loginSection = document.getElementById('loginSection');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'DTI' && password === 'velocity_4') {
                loginSection.style.display = 'none';
                nav.classList.add('visible');
                showSection('home');
                container.style.width = '80%';
                container.style.maxWidth = '800px';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });

        function showSection(sectionId) {
            const sections = document.querySelectorAll('.content');
            sections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('visible');
            });
            const selectedSection = document.getElementById(sectionId);
            selectedSection.style.display = 'block';
            setTimeout(() => selectedSection.classList.add('visible'), 50);

            if (sectionId === 'content') {
                const listItems = selectedSection.querySelectorAll('li');
                listItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 200);
                });
            }
        }

        function showGroupNames() {
            const names = ['Manasvini -  [LEADER]', 'Harsha -  [Web Dev]', 'Lasya priya -  [Reserch] ', 'Akshaya -  [PPT - Idea]', 'Keerthana -  [Desiginer and Chartwork]', 'pallavi -  [Hardware reserch] [', 'Hasini -  [Reserch]', 'Charanya -  [Content Reserch]', ];
            const groupNamesDiv = document.getElementById('groupNames');
            groupNamesDiv.innerHTML = '';

            names.forEach((name, index) => {
                const nameDiv = document.createElement('div');
                nameDiv.textContent = name;
                groupNamesDiv.appendChild(nameDiv);

                setTimeout(() => {
                    nameDiv.style.opacity = '5';
                    nameDiv.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }