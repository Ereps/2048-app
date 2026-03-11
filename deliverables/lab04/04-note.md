# Rapport TP – Lab 4 : CI/CD Avancée

## 1. Triggers et conditions
- Push sur `main`, pull request vers `main`, manuel (`workflow_dispatch`)
- Ignorer `docs/**` avec `paths-ignore`
- Conditions (`if`) pour exécuter seulement les jobs nécessaires

## 2. Organisation et parallélisation
- Push : build + artifact
- PR : build + lint/typecheck/tests en parallèle
- `needs` pour dépendances entre jobs

## 3. Cache et dépendances
- Cache pnpm pour accélérer l’installation
- Réutilisation du store entre jobs

## 4. Variables et artifacts
- Variable `NODE_VERSION` pour homogénéité
- Rétention : 1 semaine pour main, 24h sinon

## 5. Déploiement manuel
- Inputs `workflow_dispatch` : activer tests, choisir environnement (`QA`/`PROD`)
- Job déploiement conditionnel selon input

## 6. Adaptation GitLab CI
- Syntaxe différente : `stages`, `jobs`, `rules`, `needs`, `cache`
- Variables prédéfinies : `$CI_COMMIT_BRANCH`, `$CI_PIPELINE_SOURCE`
- Gestion des artifacts et parallélisation similaire

## 7. Conclusion
- Maîtrise des triggers, cache, artifacts, variables
- Compréhension des différences GitHub Actions vs GitLab CI
- Pipeline optimisé pour builds, tests et déploiements
