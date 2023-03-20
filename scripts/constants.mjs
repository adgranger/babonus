export const MODULE = "babonus";
export const MODULE_NAME = "Build-a-Bonus";
export const MODULE_ICON = "fa-solid fa-otter";
export const SETTING_HEADERLABEL = "headerLabel";
export const SETTING_DISABLE_CUSTOM_SCRIPT_FILTER = "disableCustomScriptFilter";
export const SETTING_MIGRATION_VERSION = "migrationVersion";
export const CURRENT_MIGRATION_VERSION = 1; // bump this when new migration is needed.
export const SHOW_AURA_RANGES = "showAuraRanges";

// the kind of matching done for spell components (at least 1 vs matching all).
export const SPELL_COMPONENT_MATCHING = {ANY: "ANY", ALL: "ALL"};

// the kinds of bonuses you can make.
export const TYPES = [
  // bonuses to attack rolls, crit range, fumble range
  {value: "attack", icon: "fa-solid fa-location-crosshairs", label: "BABONUS.TypeAttackRolls"},
  // bonuses to damage rolls, critical damage, critical bonus dice
  {value: "damage", icon: "fa-solid fa-burst", label: "BABONUS.TypeDamageRolls"},
  // bonuses to the save DC
  {value: "save", icon: "fa-solid fa-hand-sparkles", label: "BABONUS.TypeSaves"},
  // bonuses to a saving throw, and death save target value
  {value: "throw", icon: "fa-solid fa-person-falling-burst", label: "BABONUS.TypeSavingThrows"},
  // Bonuses to Ability Checks, Skill Checks, Tool Checks, Initiative.
  {value: "test", icon: "fa-solid fa-bolt", label: "BABONUS.TypeAbilityChecks"},
  // bonuses to hit die rolls
  {value: "hitdie", icon: "fa-solid fa-heart-pulse", label: "BABONUS.TypeHitdieRolls"}
];

// mapping of bonus types to tooltips, labels, and formData names.
export const BONUS_TYPES_FORMDATA = {
  "attack": [
    {TOOLTIP: "BABONUS.TypeAttackBonusTooltip", LABEL: "BABONUS.TypeAttackBonusLabel", NAME: "bonuses.bonus"},
    {TOOLTIP: "BABONUS.TypeAttackBonusCriticalRangeTooltip", LABEL: "BABONUS.TypeAttackCriticalRangeLabel", NAME: "bonuses.criticalRange"},
    {TOOLTIP: "BABONUS.TypeAttackBonusFumbleRangeTooltip", LABEL: "BABONUS.TypeAttackFumbleRangeLabel", NAME: "bonuses.fumbleRange"}
  ],
  "test": [
    {TOOLTIP: "BABONUS.TypeTestBonusTooltip", LABEL: "BABONUS.TypeTestBonusLabel", NAME: "bonuses.bonus"}
  ],
  "damage": [
    {TOOLTIP: "BABONUS.TypeDamageBonusTooltip", LABEL: "BABONUS.TypeDamageBonusLabel", NAME: "bonuses.bonus"},
    {TOOLTIP: "BABONUS.TypeDamageCriticalBonusDiceTooltip", LABEL: "BABONUS.TypeDamageCriticalBonusDiceLabel", NAME: "bonuses.criticalBonusDice"},
    {TOOLTIP: "BABONUS.TypeDamageCriticalBonusDamageTooltip", LABEL: "BABONUS.TypeDamageCriticalBonusDamageLabel", NAME: "bonuses.criticalBonusDamage"}
  ],
  "save": [
    {TOOLTIP: "BABONUS.TypeSaveBonusTooltip", LABEL: "BABONUS.TypeSaveBonusLabel", NAME: "bonuses.bonus"}
  ],
  "throw": [
    {TOOLTIP: "BABONUS.TypeThrowBonusTooltip", LABEL: "BABONUS.TypeThrowBonusLabel", NAME: "bonuses.bonus"},
    {TOOLTIP: "BABONUS.TypeThrowDeathSaveTargetValueTooltip", LABEL: "BABONUS.TypeThrowDeathSaveTargetValueLabel", NAME: "bonuses.deathSaveTargetValue"},
    {TOOLTIP: "BABONUS.TypeThrowDeathSaveCriticalTooltip", LABEL: "BABONUS.TypeThrowDeathSaveCriticalLabel", NAME: "bonuses.deathSaveCritical"}
  ],
  "hitdie": [
    {TOOLTIP: "BABONUS.TypeHitdieBonusTooltip", LABEL: "BABONUS.TypeHitdieBonusLabel", NAME: "bonuses.bonus"}
  ]
};

// item types that can get a bonus when rolling attack, damage, or showing a save dc.
export const ITEM_ROLL_TYPES = ["consumable", "equipment", "feat", "spell", "weapon"];

// item types that can be equipped/attuned (as of 2.1.0).
export const EQUIPPABLE_TYPES = ["weapon", "equipment", "consumable", "tool", "backpack"];

// the disposition of an aura (targeting allies, enemies, or all).
export const AURA_TARGETS = {ALLY: 1, ENEMY: -1, ANY: 2};

// names of all filters.
export const FILTER_NAMES = [
  "abilities",
  "arbitraryComparison",
  "attackTypes",
  "baseWeapons",
  "baseTools",
  "creatureTypes",
  "customScripts",
  "damageTypes",
  "itemRequirements",
  "itemTypes",
  "preparationModes",
  "remainingSpellSlots",
  "saveAbilities",
  "skillIds",
  "spellComponents",
  "spellLevels",
  "spellSchools",
  "statusEffects",
  "targetEffects",
  "throwTypes",
  "tokenSizes",
  "weaponProperties"
];

// arbitrary operators
export const ARBITRARY_OPERATORS = [
  {value: "EQ", label: "="},
  {value: "LT", label: "&lt;"},
  {value: "GT", label: "&gt;"},
  {value: "LE", label: "&le;"},
  {value: "GE", label: "&ge;"}
];
