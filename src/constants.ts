import itemMaster from './item-master.json';

export const ITEM_MASTER: Record<string, { name: string; icon: string } | undefined> = itemMaster;

export const WORLD_MASTER: Record<number, { name: string; dcName: string }> = {
  // Elemental
  90: { name: 'Aegis', dcName: 'Elemental' },
  68: { name: 'Atomos', dcName: 'Elemental' },
  45: { name: 'Carbuncle', dcName: 'Elemental' },
  58: { name: 'Garuda', dcName: 'Elemental' },
  94: { name: 'Gungnir', dcName: 'Elemental' },
  49: { name: 'Kujata', dcName: 'Elemental' },
  72: { name: 'Tonberry', dcName: 'Elemental' },
  50: { name: 'Typhon', dcName: 'Elemental' },

  // Gaia
  43: { name: 'Alexander', dcName: 'Gaia' },
  69: { name: 'Bahamut', dcName: 'Gaia' },
  92: { name: 'Durandal', dcName: 'Gaia' },
  46: { name: 'Fenrir', dcName: 'Gaia' },
  59: { name: 'Ifrit', dcName: 'Gaia' },
  98: { name: 'Ridill', dcName: 'Gaia' },
  76: { name: 'Tiamat', dcName: 'Gaia' },
  51: { name: 'Ultima', dcName: 'Gaia' },

  // Mana
  44: { name: 'Anima', dcName: 'Mana' },
  23: { name: 'Asura', dcName: 'Mana' },
  70: { name: 'Chocobo', dcName: 'Mana' },
  47: { name: 'Hades', dcName: 'Mana' },
  48: { name: 'Ixion', dcName: 'Mana' },
  96: { name: 'Masamune', dcName: 'Mana' },
  28: { name: 'Pandaemonium', dcName: 'Mana' },
  61: { name: 'Titan', dcName: 'Mana' },

  // Meteor
  24: { name: 'Belias', dcName: 'Meteor' },
  82: { name: 'Mandragora', dcName: 'Meteor' },
  60: { name: 'Ramuh', dcName: 'Meteor' },
  29: { name: 'Shinryu', dcName: 'Meteor' },
  30: { name: 'Unicorn', dcName: 'Meteor' },
  52: { name: 'Valefor', dcName: 'Meteor' },
  31: { name: 'Yojimbo', dcName: 'Meteor' },
  32: { name: 'Zeromus', dcName: 'Meteor' },

  // 21: { name: 'Ravana', dcName: '' },
  // 22: { name: 'Bismarck', dcName: '' },
  // 65: { name: 'Midgardsormr', dcName: '' },
  // 66: { name: 'Odin', dcName: '' },
  // 67: { name: 'Shiva', dcName: '' },
  // 62: { name: 'Diabolos', dcName: '' },
  // 56: { name: 'Phoenix', dcName: '' },
  // 63: { name: 'Gilgamesh', dcName: '' },
  // 64: { name: 'Leviathan', dcName: '' },
  // 57: { name: 'Siren', dcName: '' },
  // 55: { name: 'Lamia', dcName: '' },
  // 53: { name: 'Exodus', dcName: '' },
  // 54: { name: 'Faerie', dcName: '' },
  // 73: { name: 'Adamantoise', dcName: '' },
  // 74: { name: 'Coeurl', dcName: '' },
  // 75: { name: 'Malboro', dcName: '' },
  // 77: { name: 'Ultros', dcName: '' },
  // 78: { name: 'Behemoth', dcName: '' },
  // 79: { name: 'Cactuar', dcName: '' },
  // 80: { name: 'Cerberus', dcName: '' },
  // 81: { name: 'Goblin', dcName: '' },
  // 83: { name: 'Louisoix', dcName: '' },
  // 85: { name: 'Spriggan', dcName: '' },
  // 86: { name: 'Sephirot', dcName: '' },
  // 87: { name: 'Sophia', dcName: '' },
  // 88: { name: 'Zurvan', dcName: '' },
};
